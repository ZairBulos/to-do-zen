const jwt = require('../utils/jwt');
const User = require('../models/user');
const bcrypt = require('../utils/bcrypt');

const login = async (req, res) => {
  const body = req.body;

  const user = await User.findOne({ username: body.username });

  const passwordCorrect = user === null
    ? false
    : await bcrypt.comparePassword(body.password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({ error: 'invalid username or password' });
  }

  const payload = {
    username: user.username,
    id: user._id
  };

  const token = jwt.signJwt(payload);

  res
    .status(200)
    .send({ token, username: user.username });
};

module.exports = {
  login
};