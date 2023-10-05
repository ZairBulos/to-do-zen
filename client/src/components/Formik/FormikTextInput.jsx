import React from 'react';
import { useField } from 'formik';
import { Text, TextInput } from 'react-native';

function FormikTextInput({ name, placeholder, style, isSecureTextEntry }) {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        value={field.value} 
        placeholder={placeholder}
        onBlur={() => helpers.setTouched(true)}
        onChangeText={value => helpers.setValue(value)}
        secureTextEntry={isSecureTextEntry ? true : false}
        className={style}
      />
      {showError && 
        <Text className='mt-2 text-sm text-red-600 dark:text-red-500'>
          {meta.error}
        </Text>
      }
    </>
  );
}

export default FormikTextInput;