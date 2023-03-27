import { gql } from '@apollo/client';

export const QUERY_MYTEAMS = gql`
query getMyTeams($username: String!) {
  me(username: $username) {
    username
    state
    zip
    city
    bio
    teams {
      _id
      name
      sport
      address
      state
      city
      captain {
        username
      }
    }
  }
}`

export const SEARCH_TEAMS = gql`
query SEARCH_TEAMS($name: String, $sport: String, $state: String, $city: String, $team_zip_code: String, $latitude: Float, $longitude: Float, $radius: Int) {
  searchTeams(name: $name, sport: $sport, state: $state, city: $city, team_zip_code: $team_zip_code, latitude: $latitude, longitude: $longitude, radius: $radius) {
    _id
    sport
    name
    state
    team_zip_code
    city
    address
    location {
      lat
      lng
    }
    captain {
      _id
      username
    }
    members {
      _id
      username
    }
  }
}`