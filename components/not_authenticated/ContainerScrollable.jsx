import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ContainerScrollable = ({ iconName, title, children }) => {
  return (
     <>
      <View className="mx-2 mt-2 flex flex-row space-x-2">
        <MaterialCommunityIcons
          name={iconName}
          color={'gray'}
          size={30}
        />
        <Text className="text-2xl font-bold">{title}</Text>
      </View>
      <ScrollView className="container my-2">{children}</ScrollView>
    </>
  );
};

export default Container;
