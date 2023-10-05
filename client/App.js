import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';

import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import Main from './src/components/Main/Main';

import { store } from './src/redux/store';
const authStorage = new AuthStorage();

export default function App() {
  return (
    <NativeRouter>
      <Provider store={store}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </Provider>
    </NativeRouter>
  );
}