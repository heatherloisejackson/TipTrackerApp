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
      if(!context.user){
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