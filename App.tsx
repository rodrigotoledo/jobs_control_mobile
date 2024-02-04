/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import SignIn from './components/not_authenticated/SignIn';
import SignUp from './components/not_authenticated/SignUp';
import ForgotPassword from './components/not_authenticated/ForgotPassword';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#334155',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#c3cad4',
          shadowColor: '#334155'
        }
      }}>
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitle: 'Sign In',
          headerLeft: () => (
            <View className="ml-4">
              <MaterialCommunityIcons
                name="login"
                color="gray"
                size={30}
              />
            </View>
          ),
          tabBarLabel: 'Sign In',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="login"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: 'Sign Up',
          headerLeft: () => (
            <View className="ml-4">
              <MaterialCommunityIcons
                name="account-plus"
                color="gray"
                size={30}
              />
            </View>
          ),
          tabBarLabel: 'Sign Up',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-plus"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerTitle: 'Forgot Password',
          headerLeft: () => (
            <View className="ml-4">
              <MaterialCommunityIcons
                name="lock-reset"
                color="gray"
                size={30}
              />
            </View>
          ),
          tabBarLabel: 'Forgot Password',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="lock-reset"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function App(): React {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
