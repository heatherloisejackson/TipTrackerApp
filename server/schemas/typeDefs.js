const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Bank_Account {
    _id: ID
    username: String
    accountNumber: Int
    accountType: String
    transactions: [Transaction]!
  }

  type Transaction {
    _id: ID
    user: Bank_Account
    amount: Float!
    date: Int
  }

  type Query {
    accounts: [Bank_Account]!
    account(accountNumber: Int!): Bank_Account
    transactions: [Transaction]!
    transaction( _id: ID!): Transaction
  }

  type Mutation {
    addTransaction(user: ID!, amount: Float!, date: Int): Bank_Account
    addAccount(username: String!, accountNumber: Int!, accountType: String!): Transaction
    removeAccount(accountID: ID!): Transaction
    removeTransaction(accountID: ID!, transactionId: ID!): Bank_Account
  }
`;

module.exports = typeDefs;
