import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import todoService from '../services/todos';
import { initializeTodos, removeTodo, updateTodo } from '../redux/todoReducer';

export const useTodos = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);

  useEffect(() => {
    onInitialize();
  }, []);

  const onInitialize = async () => {
    try {
      const todos = await todoService.getAll();
      dispatch(initializeTodos(todos));
    } catch (error) {
      throw error;
    }
  };

  const onPatch = async (todo) => {
    try {
      const changedTodo = { ...todo, completed: !todo.completed };
      const updatedTodo = await todoService.patch(changedTodo);
      dispatch(updateTodo(updatedTodo));
    } catch (error) {
      throw error;
    }
  };

  const onRemove = async (todo) => {
    try {
      const { id } = todo;
      await todoService.remove(id);
      dispatch(removeTodo(id));
    } catch (error) {
      throw error;
    }
  };

  return {
    todos,
    onPatch,
    onRemove
  };
};