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

export const ADD_TRANSACTION = gql`
mutation addTransaction($user: String!, $amount: Float!, $date: String) {
  addTransaction(user: $user, amount: $amount, date: $date) {
    _id
    username
    transactions{
      amount
      date
    }
  }
}
`