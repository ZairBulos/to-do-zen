import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { useTodos } from '../../hooks/useTodos';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, onPatch, onRemove } = useTodos();

  const handleComplete = async (todo) => {
    await onPatch(todo);
  };

  const handleDelete = async (todo) => {
    await onRemove(todo);
  };

  return (
    <View>
      <Text className='text-2xl font-black mb-4'>
        Today
      </Text>
      <FlatList
        data={todos}
        renderItem={({ item }) =>
          <TodoItem 
            todo={item} 
            handleComplete={handleComplete}
            handleDelete={handleDelete} 
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default TodoList;