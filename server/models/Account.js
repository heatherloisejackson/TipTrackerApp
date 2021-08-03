const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const uuid = require('uuid4')

const accountSchema = new Schema({
  username: {
    type: String,
    required: 'You need to have a username!',
    minlength: 6,
    maxlength: 35,
    trim: true,
  },
  accountNumber: {
    type: Number,
    default: uuid()
  },
  accountType: {
    type: String,
    required: 'You need to give a type!',
    trim: true,
  },
  transaction: [
    {
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Account = model('Account', accountSchema);

module.exports = Account;
