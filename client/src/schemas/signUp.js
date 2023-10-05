import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .required('El nombre de usuario es requerido')
    .min(2, 'El nombre debe tener al menos 2 caracteres'),
  password: yup
    .string()
    .required('La contraseña es requerida')
    .min(8, 'La contraseña debe tener al menos 5 caracteres'),
  passwordConfirm: yup
    .string()
    .required('Se requiere confirmación de contraseña')
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
});