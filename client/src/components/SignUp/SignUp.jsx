import { Formik } from 'formik';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { useNavigate } from 'react-router-native';

import SignUpForm from './SignUpForm';
import { signUpSchema } from '../../schemas/signUp';
import { useSignUp } from '../../hooks/useSignUp';
import { useSignIn } from '../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
};

function SignUp() {
  const navigate = useNavigate();
  const { onSignUp } = useSignUp();
  const { onSignIn } = useSignIn();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    try {
      const { username, password } = values;

      await onSignUp({ username, password });
      await onSignIn({ username, password });

      navigate('/');
    } catch (error) {
      setError('No se puedo registrar el usuario');
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} error={error} />
  );
}

function SignUpContainer({ onSubmit, error }) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={signUpSchema}
    >
      {({ handleSubmit }) => (
        <>
          <SignUpForm onSubmit={handleSubmit} />
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

export default SignUp;