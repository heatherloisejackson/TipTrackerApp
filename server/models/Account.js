const { Schema, model } = require('mongoose');
const uuid = require('uuid4')
const bcrypt = require('bcrypt');

const accountSchema = new Schema({
  username: {
    type: String,
    required: 'You need to have a username!',
    minlength: 6,
    maxlength: 35,
    trim: true,
  },
  password:{
    type: String,
    required: 'You need a password!'
  },
  transactions: [
    {
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: String
      },
    },
  ],
});

accountSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

accountSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Account = model('Account', accountSchema);

module.exports = Account;
