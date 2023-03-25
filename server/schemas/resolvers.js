const { AuthenticationError } = require('apollo-server-express');
const { User, Sport, Team } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('teams');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('teams');
    },
    sports: async () => {
      return Sport.find();
    },
    teams: async () => {
      return Team.find().populate('captain').populate('members');
    },
    team: async (parent, { teamId }) => {
      return Team.findOne({ _id: teamId }).populate('captain').populate('members');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, password, state, zip, city }) => {
      const user = await User.create({ username, password, state, zip, city });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user found with this username address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addSport: async (parent, { name }, context) => {
      const sport = await Sport.create({ name });
      return sport;
    },
    addTeam: async (parent, { name, sport, state, city, team_zip_code, captain }, context) => {
      console.log('I was hit!')
      console.log(captain);
      let user = await User.findOne({ username: captain });
      if (!user) {
        user = await User.create({
          username: captain,
          password: '',
          state,
          zip: team_zip_code,
          city
        });
      }
      
      const team = await Team.create({
        name,
        sport,
        state,
        city,
        team_zip_code,
        captain: user._id,
        members: []
      });

      await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { teams: team._id } }
      );

      return Team.findById(team._id).populate('captain').populate('members');
    },
    leaveTeam: async (parent, { teamId, username }, context) => {
      if (context.user) {
        const team = await Team.findOneAndUpdate(
          { _id: teamId },
          {
            $pull: {
              members: context.user._id,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { teams: team._id }}
        );

        return team;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeTeam: async (parent, { teamId }, context) => {
      if (context.user) {
        const team = await Team.findOneAndDelete({
          _id: teamId,
        });

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { teams: team._id } }
        );

        const token = signToken(user);
  
        return { token, user };
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeSport: async (parent, { sportId }, context) => {
      if (context.user) {
        return Sport.findOneAndDelete(
          { _id: sportId }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
