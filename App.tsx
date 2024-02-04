/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
          shadowColor: '#334155',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 2,
        }
      }}>
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitle: 'Sign In',
          headerLeft: () => (
            <MaterialCommunityIcons
              name="login"
              color="gray"
              size={30}

            />
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
          tabBarLabel: 'SignUp',
          // eslint-disable-next-line react/no-unstable-nested-components
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
          tabBarLabel: 'ForgotPassword',
          // eslint-disable-next-line react/no-unstable-nested-components
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
