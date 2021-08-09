const jwt = require('jsonwebtoken');
require('dotenv').config()

const secret = process.env.JSONWT;
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
