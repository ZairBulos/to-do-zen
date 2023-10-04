const bcrypt = require('bcrypt');

const comparePassword = async (password, passwordHash) => {
  const compare = await bcrypt.compare(password, passwordHash);
  return compare
};

const createPasswordHash = async (password) => {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  return passwordHash;
};

module.exports = {
  comparePassword,
  createPasswordHash,
};