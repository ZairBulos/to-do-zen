import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import todoService from '../services/todos';
import { initializeTodos } from '../redux/todoReducer';

export const useTodos = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);

  useEffect(() => {
    onInitialize();
  }, []); 

  const onInitialize = async () => {
    try {
      const todos = await todoService.getAll();
      dispatch(initializeTodos({ todos }));
    } catch (error) {
      throw error;
    }
  };

  return {
    todos, 
  };
};