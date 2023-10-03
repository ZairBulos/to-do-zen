const { getAll, getById, create } = require('../controllers/users');

const userRouter = require('express').Router();

userRouter.get('/', getAll);
userRouter.post('/', create);
userRouter.get('/:id', getById);

module.exports = userRouter;