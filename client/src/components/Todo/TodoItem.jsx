import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, } from 'react-native';

function TodoItem({ todo, handleComplete, handleDelete }) {
  return (
    <View className='flex-row p-4 mb-4 justify-between bg-transparent border border-black rounded-full'>
      <View className='flex-row items-center'>
        <TouchableOpacity
          onPress={() => handleComplete(todo)}
          className={`border border-black rounded-md mr-4 ${todo.completed ? 'bg-green-500/50' : 'bg-gray-500/50'}`}
        >
          <Text className='w-5 h-5' />
        </TouchableOpacity>
        <Text className={`max-w-[80%] truncate ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.title}
        </Text>
      </View>
      {todo.completed &&
        <TouchableOpacity
          onPress={() => handleDelete(todo)}
        >
          <Ionicons name='trash' size={18} color='gray' />
        </TouchableOpacity>
      }
    </View>
  );
}

export default TodoItem;