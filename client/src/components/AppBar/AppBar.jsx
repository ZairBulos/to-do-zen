import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

import { useSignIn } from '../../hooks/useSignIn';

function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { onSignOut } = useSignIn();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    await onSignOut();
  };

  return (
    <View className='mt-2 items-end'>
      <TouchableOpacity
        onPress={toggleOpen}
      >
        <Ionicons name='person-circle' size={48} color='black' />
      </TouchableOpacity>
      {isOpen && 
        <TouchableOpacity
          className='mr-2 mt-2'
          onPress={handleSignOut}
        >
          <Ionicons name='log-out' size={24} color='red' />
        </TouchableOpacity>
      }
    </View>
  );
}

export default AppBar;