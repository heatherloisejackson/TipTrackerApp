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
    token
    user {
      _id
    }
  }
}
`;

export const ADD_TRANSACTION = gql`
mutation addTransaction($_id: ID, $amount: Float!, $date: String) {
  addTransaction(_id: $_id, amount: $amount, date: $date) {
    _id
    transactions{
      amount
      date
    }
  }
}
`

export const UPDATE_TRANSACTION = gql`
mutation updateTransaction($_id:ID!,$amount: Int!){
  updateTransaction(_id:$_id, amount: $amount){
    amount
  }
}
`

export const REMOVE_TRANSACTION = gql`
mutation removeTransaction($_id: ID!){
  removeTransaction(_id:$_id){
    _id
  }
}
`

export const REMOVE_ACCOUNT = gql`
mutation removeAccount($_id: ID!){
  removeAccount(_id: $_id){
    _id
  }
}
`