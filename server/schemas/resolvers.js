const { AuthenticationError } = require('apollo-server-express');
const { Account, Transaction } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    accounts: async () => {
      return Account.find();
    },

    account: async (parent, { accountNumber }) => {
      return Account.findOne({ accountNumber: accountNumber });
    },

    transactions: async () => {
      return Transaction.find();
    },

    transaction: async (parent, { transactionID }) => {
      return Transaction.findOne({ transactionID: transactionID });
    },
  },

  Mutation: {
    addAccount: async (parent, { username, accountNumber, accountType, password }) => {
      const user = await Account.create({ username, accountNumber, accountType, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addTransaction: async (parent, { accountNumber, user, transactionID, amount, date }) => {
      return Account.findOneAndUpdate(
        { _id: accountNumber },
        {
          $addToSet: { transaction: { user, transactionID, amount, date } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeAccount: async (parent, { accountID }) => {
      return Account.findOneAndDelete({ _id: accountID });
    },
    removeTransaction: async (parent, { accountID, transactionId }) => {
      return Account.findOneAndUpdate(
        { _id: accountID },
        { $pull: { transaction: { _id: accountID } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
