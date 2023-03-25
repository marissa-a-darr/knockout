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
    me: async (parent, { username }, context) => {
      return User.findOne({ username }).populate('teams');
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
    joinTeam: async(parent, {teamdId, username}, context) => {
      const user = await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { teams: team._id }}
      );

      const team = await Team.findOneAndUpdate(
        { _id: teamId },
        {
          $addToSet: {
            members: user._id,
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );

      return User.findOne({ username }).populate('teams');
    },
    leaveTeam: async (parent, { teamId, username }, context) => {
      const user = await User.findOneAndUpdate(
        { username: username },
        { $pull: { teams: team._id }}
      );

      const team = await Team.findOneAndUpdate(
        { _id: teamId },
        {
          $pull: {
            members: user._id,
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );

      return User.findOne({ username }).populate('teams');
    },
    removeTeam: async (parent, { teamId }, context) => {
      const team = await Team.findOneAndDelete({
        _id: teamId,
      });

      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { teams: team._id } }
      );

      const token = signToken(user);
  
      return { token, user };
    },
    removeSport: async (parent, { sportId }, context) => {
      return Sport.findOneAndDelete(
        { _id: sportId }
      );
    },
  },
};

module.exports = resolvers;
