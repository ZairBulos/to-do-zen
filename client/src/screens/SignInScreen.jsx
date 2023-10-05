import React from 'react';
import { View, Text } from 'react-native';
import SignIn from '../components/SignIn/SignIn';

function SignInScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Text className='text-2xl font-bold mb-8'>
        Inicia sesión
      </Text>
      <View className='w-72'>
        <SignIn />
      </View>
    </View>
  );
}

export default SignInScreen;