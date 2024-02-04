import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderUnauthorized from './HeaderUnauthorized';


const SignUp = () => {
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
      <ScrollView className="mb-10">
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
        <TextInput
          className='
            border-2
            border-slate-300
            rounded
            p-2
            mb-4
            w-80
          '
          placeholder="Password Confirmation"
          secureTextEntry
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
          placeholder="Full Name"
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

          placeholder="Phone"
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

          placeholder="Cellphone"
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

          placeholder="Address"
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
            name="account-plus"
            color="white"
            size={30}

          />
          <Text className='text-white text-lg'>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignUp;
