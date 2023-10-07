import React, { useState, useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

import { useTodos } from '../../hooks/useTodos';

function TodoInput() {
  const { onCreate } = useTodos();
  const [title, setTitle] = useState('');

  const handleSubmit = useCallback(async () => {
    if (title.trim() !== '') {
      setTitle('');
      await onCreate(title);
    }
  }, [onCreate, title]);

  return (
    <View className='flex-row justify-center items-center mt-auto'>
      <TextInput
        id='title'
        defaultValue={title}
        onChangeText={setTitle}
        placeholder='Añadir nueva tarea...'
        className='p-2 min-w-[90%] bg-slate-50 rounded-full border border-black'
      />
      <Pressable
        onPress={handleSubmit}
      >
        <Ionicons name='add-circle' size={36} color='black' />
      </Pressable>
    </View>
  );
}

export default TodoInput;