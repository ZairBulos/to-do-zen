import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { useTodos } from '../../hooks/useTodos';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos } = useTodos();

  return (
    <View>
      <Text className='text-2xl font-black mb-4'>
        Today
      </Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem todo={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default TodoList;