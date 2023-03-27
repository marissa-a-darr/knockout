const { AuthenticationError } = require("apollo-server-express");
const { User, Sport, Team } = require("../models");
const { signToken } = require("../utils/auth");
const NodeGeocoder = require('node-geocoder');

const deg2rad = (deg) => {
  return deg * (Math.PI/180);
}

const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c; // Distance in km
  return d/1.60934;
}

const calculateTeamsWithinRadius = (teams, latitude, longitude, radius) => {
  let resultTeams = [];
  teams.forEach(team => {
    const distance = getDistance(latitude, longitude, team.location.lat, team.location.lng);
    console.log(distance);
    if (distance <= radius) {
      resultTeams.push(team);
    }
  });
  return resultTeams;
}

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("teams");
    },
    user: async (parent, { username }) => {
      let user = await User.findOne({ username });
      if (!user) {
        user = await User.create({
          username: username,
          password: "",
          state: "",
          zip: null,
          city: "",
        });
      }

      const teams = await Team.find({
        _id: {
          $in: user.teams,
        },
      })
        .populate("captain")
        .populate("members");
      user.teams = teams;
      return user;
    },
    sports: async () => {
      return Sport.find();
    },
    teams: async () => {
      return Team.find().populate("captain").populate("members");
    },
    searchTeams: async (parent, { name, sport, state, city, team_zip_code, latitude, longitude, radius }) => {
      let query = {};
      if (name) {
        query.name = { $regex: new RegExp(name, "i") };
      }
      if (sport) {
        query.sport = { $regex: new RegExp(sport, "i") };
      }
      console.log(state);
      console.log((state && !(radius < 100000000 && (city || team_zip_code))));
      if (state && !(radius < 100000000 && (city || team_zip_code))) {
        query.state = { $regex: new RegExp(state, "i") };
      }
      if (city && !(radius < 100000000)) {
        query.city = { $regex: new RegExp(city, "i") };
      }
      if (team_zip_code && !(radius < 100000000)) {
        query.team_zip_code = { $regex: new RegExp(team_zip_code, "i") };
      }

      console.log(query);

      console.log(latitude, longitude, radius);

      const allTeams = await Team.find(query).populate('captain').populate('members').sort({createdAt: 'desc'});

      console.log('Google Maps API Key', process.env.GOOGLE_MAPS_API_KEY);
      const geocoder = NodeGeocoder({
        provider: 'google',
        apiKey: process.env.GOOGLE_MAPS_API_KEY
      });

      let teams = [];
      for (let i = 0; i < allTeams.length; i++) {
          let team = allTeams[i];
          const address = `${team.address}, ${team.city}, ${team.state} ${team.team_zip_code}`;
          const geocode = await geocoder.geocode(address);
          team.location = {
            lat: geocode[0].latitude,
            lng: geocode[0].longitude,
          }
          teams.push(team)
      };

      if (radius < 100000000) {
        if (state && !city && !team_zip_code) {
          console.log('ONLY STATE');
          return teams;
        }
        if (team_zip_code || city || state) {
          const address = `${city}, ${state} ${team_zip_code}`;
          try {
            const g2 = await geocoder.geocode(address);
            console.log('G2', g2);
            if (g2[0]) {
              latitude = g2[0].latitude;
              longitude = g2[0].longitude;
              console.log('New Lat & Long', latitude, longitude);
            }
          } catch (err) {
            console.error(err);
          }
        }
        return calculateTeamsWithinRadius(teams, latitude, longitude, radius);
      }
      return teams;
    },
    searchTeams: async (parent, { name, sport, state, city, team_zip_code, latitude, longitude, radius }) => {
      let query = {};
      if (name) {
        query.name = { $regex: new RegExp(name, "i") };
      }
      if (sport) {
        query.sport = { $regex: new RegExp(sport, "i") };
      }
      console.log(state);
      console.log((state && !(radius < 100000000 && (city || team_zip_code))));
      if (state && !(radius < 100000000 && (city || team_zip_code))) {
        query.state = { $regex: new RegExp(state, "i") };
      }
      if (city && !(radius < 100000000)) {
        query.city = { $regex: new RegExp(city, "i") };
      }
      if (team_zip_code && !(radius < 100000000)) {
        query.team_zip_code = { $regex: new RegExp(team_zip_code, "i") };
      }

      console.log(query);

      console.log(latitude, longitude, radius);

      const allTeams = await Team.find(query).populate('captain').populate('members').sort({createdAt: 'desc'});

      console.log('Google Maps API Key', process.env.GOOGLE_MAPS_API_KEY);
      const geocoder = NodeGeocoder({
        provider: 'google',
        apiKey: process.env.GOOGLE_MAPS_API_KEY
      });

      let teams = [];
      for (let i = 0; i < allTeams.length; i++) {
          let team = allTeams[i];
          const address = `${team.address}, ${team.city}, ${team.state} ${team.team_zip_code}`;
          const geocode = await geocoder.geocode(address);
          team.location = {
            lat: geocode[0].latitude,
            lng: geocode[0].longitude,
          }
          teams.push(team)
      };

      if (radius < 100000000) {
        if (state && !city && !team_zip_code) {
          console.log('ONLY STATE');
          return teams;
        }
        if (team_zip_code || city || state) {
          const address = `${city}, ${state} ${team_zip_code}`;
          try {
            const g2 = await geocoder.geocode(address);
            console.log('G2', g2);
            if (g2[0]) {
              latitude = g2[0].latitude;
              longitude = g2[0].longitude;
              console.log('New Lat & Long', latitude, longitude);
            }
          } catch (err) {
            console.error(err);
          }
        }
        return calculateTeamsWithinRadius(teams, latitude, longitude, radius);
      }
      return teams;
    },
    team: async (parent, { teamId }) => {
      return Team.findOne({ _id: teamId })
        .populate("captain")
        .populate("members");
    },
    me: async (parent, { username }, context) => {
      console.log(username);
      let user = await User.findOne({ username });
      console.log('User', user);
      if (!user) {
        try {
        user = await User.create({
          username: username,
          password: "",
          state: "",
          zip: null,
          city: "",
        });
        } catch (err) {
          console.log(err);
        }
        console.log('User Created', user);
      }

      const teams = await Team.find({
        _id: {
          $in: user.teams,
        },
      })
        .populate("captain")
        .populate("members");
      user.teams = teams;
      return user;
    },
  },

  Mutation: {
    addUser: async (parent, { username, password, state, zip, city, bio }) => {
      const user = await User.create({ username, password, state, zip, city });
      const token = signToken(user);
      return { token, user };
    },
    editUser: async (parent, {username, name, state, city, zip, bio}  ) => {
      const user = await User.findOneAndUpdate(
        {
          username: username,
        },
        {
          name,
          state,
          city,
          zip,
          bio,
        }
      );
      const token = signToken(user);
      return { token, user};
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError(
          "No user found with this username address"
        );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addSport: async (parent, { name }, context) => {
      const sport = await Sport.create({ name });
      return sport;
    },
    addTeam: async (
      parent,
      { name, sport, address, state, city, team_zip_code, captain },
      context
    ) => {
      console.log("I was hit!");
      console.log(captain);
      let user = await User.findOne({ username: captain });
      if (!user) {
        user = await User.create({
          username: captain,
          password: "",
          state,
          zip: team_zip_code,
          city,
        });
      }

      const team = await Team.create({
        name,
        sport,
        address,
        state,
        city,
        team_zip_code,
        captain: user._id,
        members: [],
      });

      await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { teams: team._id } }
      );

      return Team.findById(team._id).populate("captain").populate("members");
    },
    joinTeam: async(parent, {teamId, username}, context) => {
      const user = await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { teams: teamId }}
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

      return User.findOne({ username }).populate("teams");
    },
    leaveTeam: async (parent, { teamId, username }, context) => {
      const user = await User.findOneAndUpdate(
        { username: username },
        { $pull: { teams: teamId } }
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

      return User.findOne({ username }).populate("teams");
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
      return Sport.findOneAndDelete({ _id: sportId });
    },
  },
};

module.exports = resolvers;
