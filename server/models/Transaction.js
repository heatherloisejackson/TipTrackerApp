const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const transactionSchema = new Schema({
  user: {
    type: String,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Transaction = model('Transaction', transactionSchema);

module.exports = Transaction;
