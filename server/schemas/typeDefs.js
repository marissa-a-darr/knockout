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

  type Query {
    users: [User]
    user(username: String!): User
    sports(): [Sport]
    teams(): [Team]
    team(teamId: ID!): Team
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
