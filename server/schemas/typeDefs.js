const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Account {
    _id: ID
    username: String
    transactions: [Transaction]
  }

  type Transaction {
    _id: ID!
    amount: Float!
    date: String
  }

  type Auth {
    token: ID!
    user: Account
  }

  type Query {
    accounts: [Account]!
    account(_id: ID!): Account
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addTransaction(_id: ID, amount: Float!, date: String): Account
    addAccount(username: String!, password: String!): Auth
    updateTransaction(_id: ID!, amount: Int!): Transaction
    removeAccount(accountID: ID!): Account
    removeTransaction(_id: ID!): Account
  }
`;

module.exports = typeDefs;
