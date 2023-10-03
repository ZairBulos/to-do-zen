const User = require('../models/users');
const { createPasswordHash } = require('./login');

const getAll = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

const getById = async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).end();
  }
};

const create = async (req, res) => {
  const body = req.body;

  if (body.username.lenght < 2 || body.password.lenght < 8) {
    return res.status(400).json({ error: 'username or password not long enough' });
  }

  const passwordHash = await createPasswordHash(body.password);

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();

  res.status(201).json(savedUser);
};

module.exports = {
  getAll,
  getById,
  create,
};