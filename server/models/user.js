const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minLength: 2
  },
  passwordHash: {
    type: String,
  }
});

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
});
schema.plugin(uniqueValidator);

const User = mongoose.model('User', schema);

module.exports = User;