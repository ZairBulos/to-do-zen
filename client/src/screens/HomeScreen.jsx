import React from 'react';
import { View, Text } from 'react-native';
import AppBar from '../components/AppBar/AppBar';

function HomeScreen() {
  return (
    <View>
      <AppBar />
      <Text className='text-center'>HOME</Text>
    </View>
  );
}

export default HomeScreen;