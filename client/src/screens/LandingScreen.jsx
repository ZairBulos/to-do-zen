import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

function LandingScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Text className='text-2xl font-bold mb-8'>
        Bienvenido a ToDoZen
      </Text>
      <Link
        to='/sign-in'
        className='p-4 rounded-md bg-black mb-4 w-48 h-14'
      >
        <Text className='text-white text-center'>
          Iniciar Sesión
        </Text>
      </Link>
      <Link
        to='/sign-up'
        className='p-4 rounded-md bg-transparent w-48 h-14 border border-black'
      >
        <Text className='text-black text-center'>
          Registrarse
        </Text>
      </Link>
    </View>
  );
}

export default LandingScreen;