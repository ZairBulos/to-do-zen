import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

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
      <View className='p-2'>
        <Link to='/sign-in' className='bg-white'>
          <Text className='text-center font-semibold text-blue-500 bg-white'>
            ¿Ya tienes una cuenta? Inicia sesión
          </Text>
        </Link>
      </View>
    </View>
  );
}

export default SignUpScreen;