import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { useTodos } from '../../hooks/useTodos';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, onPatch, onRemove } = useTodos();

  return (
    <View>
      <Text className='text-2xl font-black mb-4'>
        Today
      </Text>
      {todos.length > 0 ? (
        <FlatList
          data={todos}
          renderItem={({ item }) =>
            <TodoItem
              todo={item}
              handleComplete={onPatch}
              handleDelete={onRemove}
            />
          }
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>
          No hay tareas pendientes
        </Text>
      )}
    </View>
  );
}

export default TodoList;