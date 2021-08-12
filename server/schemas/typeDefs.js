const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Bank_Account {
    _id: ID
    username: String
    transactions: [Transaction]
  }

  type Transaction {
    amount: Float!
    date: String
  }

  type Auth {
    token: ID!
    user: Bank_Account
  }

  type Query {
    accounts: [Bank_Account]!
    account(_id: ID!): Bank_Account
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addTransaction(user: String!, amount: Float!, date: String): Bank_Account
    addAccount(username: String!, password: String!): Auth
    removeAccount(accountID: ID!): Bank_Account
    removeTransaction(accountID: ID!, transactionId: ID!): Bank_Account
  }
`;

module.exports = typeDefs;
