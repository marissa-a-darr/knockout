import { gql } from '@apollo/client';

export const QUERY_MYTEAMS = gql`
  query getMyTeams {
  me() {
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
