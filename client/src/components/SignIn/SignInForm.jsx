import React from 'react';
import { Pressable, Text, View } from 'react-native';

import FormikTextInput from '../Formik/FormikTextInput';

function SignInForm({ onSubmit }) {
  return (
    <>
      <View className='mb-6'>
        <FormikTextInput
          name='username'
          placeholder='Nombre de usuario'
          style='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
      </View>

      <View className='mb-6'>
        <FormikTextInput
          name='password'
          placeholder='Contraseña'
          style='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          isSecureTextEntry={true}
        />
      </View>

      <Pressable 
        onPress={onSubmit}
        className='p-4 rounded-md bg-black'
      >
        <Text className='text-white text-center'>
          Iniciar sesión
        </Text>
      </Pressable>
    </>
  );
}

export default SignInForm;