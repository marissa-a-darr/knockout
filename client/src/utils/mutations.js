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