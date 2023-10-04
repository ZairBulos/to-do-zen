const jwt = require('./jwt');
const logger = require('./logger');
const User = require('../models/user');

const requestLogger = (req, res, next) => {
  logger.info('Method:', req.method);
  logger.info('Path:  ', req.path);
  logger.info('Body:  ', req.body);
  logger.info('---');
  next();
};

const errorHandler = (error, req, res, next) => {
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  } else if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: error.message });
  } else if (error.name === 'TokenExpiredError') {
    return res.status(401).json({ error: 'token expired' });
  }

  next(error);
};

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization');

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7);
  } else {
    req.token = null;
  }

  next();
};

const userExtractor = async (req, res, next) => {
  const token = req.token;

  if (token) {
    const decodedToken = jwt.verifyJwt(token);

    const user = await User.findById(decodedToken.id);
    req.user = user._id;
  } else {
    res.status(401).json({ error: 'unauthorized' })
  }

  next();
};

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};


module.exports = {
  requestLogger,
  errorHandler,
  tokenExtractor,
  userExtractor,
  unknownEndpoint
};