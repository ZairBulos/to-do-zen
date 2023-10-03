const mongoose = require('mongoose');
const express = require('express');
require('express-async-errors');
const cors = require('cors');

const middleware = require('./utils/middleware');
const loginRouter = require('./routes/login');
const toDoRouter = require('./routes/todos');
const userRouter = require('./routes/users');
const config = require('./utils/config');
const logger = require('./utils/logger');

const app = express();

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((e) => {
    logger.error('error connecting to MongoDB: ', e.message);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use('/api/todos', middleware.userExtractor, toDoRouter);
app.use('/api/login', loginRouter);
app.use('/api/users', userRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;