const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Sport {
    _id: ID!
    name: String
  }

  type User {
    _id: ID!
    currently_available: Boolean
    state: String
    zip: String
    city: String
    username: String
    password: String
    teams: [Team]!
    bio: String
  }

  type Location {
    lat: Float
    lng: Float
  }

  type Team {
    _id: ID!
    name: String
    sport: String
    address: String
    state: String
    city: String
    team_zip_code: String
    location: Location
    captain: User
    members: [User]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    sports: [Sport]
    teams: [Team]
    searchTeams(name: String, sport: String, state: String, city: String, team_zip_code: String, latitude: Float, longitude: Float, radius: Int): [Team]
    team(teamId: ID!): Team
    me(username: String!): User
  }

  type Mutation {
    addUser(
      username: String!
      password: String
      state: String
      zip: String
      city: String
    ): Auth
    editUser(
      username: String!
      zip: String
      bio: String
    ): Auth
    login(username: String!, password: String!): Auth
    addSport(name: String!): Sport
    addTeam(
      name: String!
      sport: String!, address: String!
      state: String!
      city: String!
      team_zip_code: String!
      captain: String!
    ): Team
    joinTeam(teamId: ID!, username: String!): User
    leaveTeam(teamId: ID!, username: String!): User
    removeTeam(teamId: ID!): Auth
    removeSport(sportId: ID!): Auth
  }
`;

module.exports = typeDefs;
