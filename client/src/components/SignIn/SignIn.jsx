import { Formik } from 'formik';
import { Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';

import SignInForm from './SignInForm';
import { signInSchema } from '../../schemas/signIn';
import { useSignIn } from '../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: ''
};

function SignIn() {
  const navigate = useNavigate();
  const { onSignIn } = useSignIn();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    try {
      const { username, password } = values;
      await onSignIn({ username, password });

      navigate('/');
    } catch (error) {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} error={error} />
  );
}

export function SignInContainer({ onSubmit, error }) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={signInSchema}
    >
      {({ handleSubmit }) => (
        <>
          <SignInForm onSubmit={handleSubmit} />
          {error &&
            <Text className='mt-4 text-sm text-center font-bold text-red-600 dark:text-red-500'>
              {error}
            </Text>
          }
        </>
      )}
    </Formik>
  );
}

export default SignIn;