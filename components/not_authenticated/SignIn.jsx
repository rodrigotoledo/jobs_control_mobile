import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderUnauthorized from './HeaderUnauthorized';

const SignIn = () => {
  return (
    <View
      className='
        flex-1
        justify-center
        items-center
        bg-white
        h-full
      '
    >
      <HeaderUnauthorized />
      <TextInput
        className='
          border-2
          border-slate-300
          rounded
          p-2
          mb-4
          w-80
        '
        placeholder="Email"
      />
      <TextInput
        className='
          border-2
          border-slate-300
          rounded
          p-2
          mb-4
          w-80
        '
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity
        className='
          bg-slate-600
          p-4
          rounded
          w-80
          items-center flex flex-row justify-center
          space-x-2
        '
      >
        <MaterialCommunityIcons
          name="login"
          color="white"
          size={30}

        />
        <Text className='text-white text-lg'>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
