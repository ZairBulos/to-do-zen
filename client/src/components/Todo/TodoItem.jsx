import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';

function TodoItem({ todo, handleComplete, handleDelete }) {
  const [isDeleteActive, setIsDeleteActive] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => setIsDeleteActive(false)}
      onLongPress={() => setIsDeleteActive(true)}
    >
      <View className='flex-row p-4 mb-4 justify-between bg-transparent border border-black rounded-full'>
        <View className='flex-row items-center'>
          <Pressable
            onPress={() => handleComplete(todo)}
            className={`border border-black rounded-md mr-4 ${todo.completed ? 'bg-green-500/50' : 'bg-gray-500/50'}`}
          >
            <Text className='w-5 h-5' />
          </Pressable>
          <Text className={`max-w-[80%] truncate ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.title}
          </Text>
        </View>
        {isDeleteActive &&
          <Pressable
            onPress={() => handleDelete(todo)}
          >
            <Ionicons name='trash' size={20} color='gray' />
          </Pressable>
        }
      </View>
    </TouchableOpacity>
  );
}

export default TodoItem;