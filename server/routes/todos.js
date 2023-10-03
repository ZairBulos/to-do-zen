const { getAll, getById, create, update, remove } = require('../controllers/todos');

const toDoRouter = require('express').Router();

toDoRouter.get('/', getAll);
toDoRouter.post('/', create);
toDoRouter.get('/:id', getById);
toDoRouter.put('/:id', update);
toDoRouter.delete('/:id', remove);

module.exports = toDoRouter;