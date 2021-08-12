import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($username: String!, $password: String!){
  login(username:$username password:$password){
    token
  }
}
`;

export const ADD_ACCOUNT = gql`
mutation addAccount(
  $username: String!
  $password: String!
) {
  addAccount(
    username: $username
    password: $password
  ) {
    user {
      _id
    }
  }
}
`;
