import React from 'react';
import { View, Text } from 'react-native';
import SignUp from '../components/SignUp/SignUp';

function SignUpScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Text className='text-2xl font-bold mb-8'>
        Registrate
      </Text>
      <View className='w-72'>
        <SignUp />
      </View>
    </View>
  );
}

export default SignUpScreen;