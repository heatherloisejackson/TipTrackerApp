const { AuthenticationError } = require('apollo-server-express');
const { Account } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    accounts: async () => {
      return Account.find();
    },

    account: async (parent, { _id }) => {
      return Account.findOne({ _id: _id })
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
    addTransaction: async (parent, { _id, amount, date }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in.')
      }
      return Account.findOneAndUpdate(
        { _id: context.user._id },
        {
          $addToSet: { transactions: { amount, date } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updateTransaction: async (parent, { _id, amount }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in.')
      }
      const result = await Account.updateOne({ _id: context.user._id, "transactions._id": _id }, {
        $set: { "transactions.$.amount": amount }
      });
      return result
    },
    removeAccount: async (parent, { }, context) => {
      return Account.findOneAndDelete({ _id: context.user._id });
    },
    removeTransaction: async (parent, { _id }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in.')
      }
      const result = await Account.updateOne(
        { _id: context.user._id },
        {
          $pull: { transactions: { _id: _id } }
        }
      );
      return result
    },
  },
};

module.exports = resolvers;