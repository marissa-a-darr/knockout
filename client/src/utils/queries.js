import { gql } from '@apollo/client';

export const QUERY_MYTEAMS = gql`
query getMyTeams($username: String!) {
  me(username: $username) {
    username
    state
    zip
    city
    teams {
      sport
      state
      city
      captain {
        username
      }
    }
  }
}`
