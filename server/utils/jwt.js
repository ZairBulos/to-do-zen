const config = require('./config');
const jwt = require('jsonwebtoken');

const verifyJwt = (token) => {
  return jwt.verify(token, config.JWT_SECRET);
};

const signJwt = (payload) => {
  return jwt.sign(payload, config.JWT_SECRET);
};

module.exports = {
  verifyJwt,
  signJwt
};