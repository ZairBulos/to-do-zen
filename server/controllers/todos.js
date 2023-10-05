const ToDo = require('../models/todo');

const getAll = async (req, res) => {
  const user = req.user;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todos = await ToDo.find({ 
    user: user,
    created_at: { $gte: today, $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000) }
  });

  res.json(todos);
};

const getById = async (req, res) => {
  const id = req.params.id;
  const toDo = await ToDo.findById(id);

  if (!toDo) {
    return res.status(404).json({ error: 'ToDo no encontrado' });
  }

  res.json(toDo);
};

const create = async (req, res) => {
  const body = req.body;
  const user = req.user;

  const toDo = new ToDo({
    title: body.title,
    user: user,
  });

  const savedToDo = await toDo.save();
  res.status(201).json(savedToDo);
};

const update = async (req, res) => {
  const body = req.body;
  const user = req.user;
  const id = req.params.id;

  const toDoToChange = await ToDo.findById(id);

  if (toDoToChange.user.toString() === user.toString()) {
    toDoToChange.title = body.title;
    toDoToChange.completed = body.completed;

    const updatedToDo = await toDoToChange.save();
    res.json(updatedToDo);
  } else {
    res.status(401).end();
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  const user = req.user;

  const toDoToRemove = await ToDo.findById(id);

  if (toDoToRemove.user.toString() === user.toString()) {
    await ToDo.findByIdAndRemove(id);
    res.status(204).end();
  } else {
    res.status(401).end();
  }
};

const removeOlds = async () => {
  const yesterday = new Date();
  yesterday.setHours(0, 0, 0, 0);
  yesterday.setDate(yesterday.getDate() - 1);
  
  await ToDo.deleteMany({ 
    created_at: { $gte: yesterday, $lt: new Date(yesterday.getTime() + 24 * 60 * 60 * 1000) } 
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  removeOlds
};