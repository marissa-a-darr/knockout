const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Sport {
    _id: ID
    name: String
  }

  type Team {
    _id: ID
    captain: User
    members: [User]
    sport: String
    state: String
    city: String
    team_zip_code: Int
    password: String
  }

  type User {
    _id: ID
    currently_available: Boolean
    state: String
    zip: Int
    city: String
    username: String
    password: String
    teams: [Team]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    sports(): [Sport]
    teams(): [Team]
    team(teamId: ID!): Team
    me: User
  }

  type Mutation {
    addUser(username: String!, password: String!, state: String, zip: Int, city: String): Auth
    login(username: String!, password: String!): Auth
    addSport(name: String!): Sport
    addTeam(name: String!, sport: String, state: String, city: String, team_zip_code: Int): Team
    leaveTeam(teamId: ID!): Team
    removeTeam(teamId: ID!): Auth
    removeSport(sportId: ID!): Auth
  }
`;

module.exports = typeDefs;
