import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  username: yup
    .string()
    .required('El nombre de usuario es requerido'),
  password: yup
    .string()
    .required('La contraseña es requerida')
});