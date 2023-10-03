const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const config = require('../utils/config');

const login = async (req, res) => {
  const body = req.body;

  const user = await User.findOne({ username: body.username });

  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({ error: 'invalid username or password' });
  }

  const payload = {
    username: user.username,
    id: user._id
  };

  const token = jwt.sign(payload, config.JWT_SECRET);

  res
    .status(200)
    .send({ token, username: user.username });
};

const createPasswordHash = async (password) => {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  return passwordHash;
};

module.exports = {
  login,
  createPasswordHash
};