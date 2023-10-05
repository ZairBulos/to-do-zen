import userService from '../services/users';

export const useSignUp = () => {

  const onSignUp = async ({ username, password }) => {
    try {
      const user = await userService.create({ username, password });
      return user;
    } catch (error) {
      throw error;
    }
  };

  return { onSignUp };
};