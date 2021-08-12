const { AuthenticationError } = require('apollo-server-express');
const { Account, Transaction } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    accounts: async () => {
      return Account.find();
    },

    account: async (parent, { }, context) => {
      return Account.findOne({ _id: context.user._id });
    },

    transactions: async () => {
      return Transaction.find();
    },

    transaction: async (parent, { transactionID }) => {
      return Transaction.findOne({ transactionID: transactionID });
    },
  },

  Mutation: {
    addAccount: async (parent, { username, password }) => {
      const user = await Account.create({ username, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await Account.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user found with this username');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addTransaction: async (parent, {user, amount, date }, context) => {
      return Account.findOneAndUpdate(
        { _id: user },
        {
          $addToSet: { transactions: { user, amount, date } },
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
    removeTransaction: async (parent, { accountID }) => {
      return Account.findOneAndUpdate(
        { _id: accountID },
        { $pull: { transaction: { _id: accountID } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;