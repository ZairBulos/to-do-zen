const User = require('../models/user');
const bycrypt = require('../utils/bcrypt');

const getAll = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

const getById = async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id);

  user
    ? res.json(user)
    : res.status(404).end();
};

const create = async (req, res) => {
  const { username, password } = req.body;

  if (username.length < 2 || password.length < 8) {
    return res.status(400).json({ error: 'username or password not long enough' });
  }

  const passwordHash = await bycrypt.createPasswordHash(password);

  const user = new User({
    username,
    passwordHash
  });

  const savedUser = await user.save();
  res.status(201).json(savedUser);
};

module.exports = {
  getAll,
  getById,
  create,
};