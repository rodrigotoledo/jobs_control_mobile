import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderUnauthorized = () => {
  return (
     <View className='flex justify-center items-center my-10'>
      <MaterialCommunityIcons
        name="account-hard-hat"
        color="#334155"
        size={100}

      />
      <Text className='text-4xl'>Job Control</Text>
      <Text className='text-lg'>Jobs that you offer and that you have</Text>
    </View>
  );
};

export default HeaderUnauthorized;
