import React from 'react';
import { View, Text } from 'react-native';

import AppBar from '../components/AppBar/AppBar';
import TodoList from '../components/Todo/TodoList';

function HomeScreen() {
  return (
    <View className='p-4 h-full'>
      <AppBar />
      <TodoList />
    </View>
  );
}

export default HomeScreen;