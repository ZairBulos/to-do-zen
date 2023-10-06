const { getAll, getById, create, update, patch, remove } = require('../controllers/todos');

const toDoRouter = require('express').Router();

toDoRouter.get('/', getAll);
toDoRouter.post('/', create);
toDoRouter.get('/:id', getById);
toDoRouter.put('/:id', update);
toDoRouter.patch('/:id', patch);
toDoRouter.delete('/:id', remove);

module.exports = toDoRouter;