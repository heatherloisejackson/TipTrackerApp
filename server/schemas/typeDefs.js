const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Bank_Account {
    _id: ID
    username: String
    accountNumber: Int
    accountType: String
    password: String
    transactions: [Transaction]
  }

  type Transaction {
    _id: ID
    user: Bank_Account
    amount: Float!
    date: String
  }

  type Auth {
    token: ID!
    user: Bank_Account
  }

  type Query {
    accounts: [Bank_Account]!
    account(accountNumber: Int!): Bank_Account
    transactions: [Transaction]
    transaction( _id: ID!): Transaction
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addTransaction(user: String!, amount: Float!, date: String): Bank_Account
    addAccount(username: String!, accountNumber: Int!, accountType: String!, password: String!): Auth
    removeAccount(accountID: ID!): Transaction
    removeTransaction(accountID: ID!, transactionId: ID!): Bank_Account
  }
`;

module.exports = typeDefs;
