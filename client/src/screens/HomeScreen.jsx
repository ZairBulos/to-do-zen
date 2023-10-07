import React from 'react';
import { View } from 'react-native';

import AppBar from '../components/AppBar/AppBar';
import TodoList from '../components/Todo/TodoList';
import TodoInput from '../components/Todo/TodoInput';

function HomeScreen() {
  return (
    <View className='p-4 h-full'>
      <AppBar />
      <TodoList />
      <TodoInput />
    </View>
  );
}

export default HomeScreen;