import React from 'react';
import { Routes, Route, Navigate } from 'react-router-native';

import HomeScreen from '../../screens/HomeScreen';
import LandingScreen from '../../screens/LandingScreen';
import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import { useSignIn } from '../../hooks/useSignIn';

function Main() {
  const { loggedIn } = useSignIn();

  return (
    <>
      <Routes>
        <Route path='/' element={loggedIn ? <HomeScreen /> : <LandingScreen />} />
        <Route path='/sign-in' element={<SignInScreen />} />
        <Route path='/sign-up' element={<SignUpScreen />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </>
  );
}

export default Main;