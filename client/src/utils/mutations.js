import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String, $state: String, $zip: Int, $city: String) {
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
  mutation addTeam($name: String!, $sport: String!, $state: String!, $city: String!, $team_zip_code: Int!, $captain: String!) {
    addTeam(name: $name, sport: $sport, state: $state, city: $city, team_zip_code: $team_zip_code, captain: $captain) {
      _id
      sport
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

