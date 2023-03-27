import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String, $state: String, $zip: String, $city: String) {
    addUser(email: $email, password: $password, state: $state, zip: $zip, city: $city) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const EDIT_PROFILE = gql`
  mutation editUser($username: String!, $zip: Int){
    editUser(username: $username, zip: $zip ){
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_TEAM = gql`
  mutation addTeam($name: String!, $sport: String!, $address: String!, $state: String!, $city: String!, $team_zip_code: String!, $captain: String!) {
    addTeam(name: $name, sport: $sport, address: $address, state: $state, city: $city, team_zip_code: $team_zip_code, captain: $captain) {
      _id
      sport
      address
      state
      city
      team_zip_code
      captain {
        _id
        username
      }
    }
  }
`;

export const JOIN_TEAM = gql`
  mutation joinTeam($teamId: ID!, $username: String!) {
    joinTeam(teamId: $teamId, username: $username) {
      _id
      username
      teams {
        _id
        name
      }
    }
  }
`;

export const LEAVE_TEAM = gql`
  mutation leaveTeam($teamId: ID!, $username: String!) {
    leaveTeam(teamId: $teamId, username: $username) {
      _id
      username
      teams {
        _id
        name
      }
    }
  }
`;