const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Sport {
    _id: ID!
    name: String
  }

  type User {
    _id: ID!
    currently_available: Boolean
    state: String
    zip: Int
    city: String
    username: String
    password: String
    teams: [Team]!
  }

  type Team {
    _id: ID!
    sport: String
    state: String
    city: String
    team_zip_code: Int
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
    team(teamId: ID!): Team
    me(username: String!): User
  }

  type Mutation {
    addUser(username: String!, password: String, state: String, zip: Int, city: String): Auth
    login(username: String!, password: String!): Auth
    addSport(name: String!): Sport
    addTeam(name: String!, sport: String!, state: String!, city: String!, team_zip_code: Int!, captain: String!): Team
    joinTeam(teamId: ID!, username: String!): User
    leaveTeam(teamId: ID!, username: String!): User
    removeTeam(teamId: ID!): Auth
    removeSport(sportId: ID!): Auth
  }
`;

module.exports = typeDefs;
