const { login } = require('../controllers/login');

const loginRouter = require('express').Router();

loginRouter.post('/', login);

module.exports = loginRouter;