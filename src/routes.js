import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import Home from './pages/Home'

export default function Routes () {
  const {Navigator, Screen} = createStackNavigator();

  return(
    <NavigationContainer>
      <Navigator>
        <Screen name='Login'  component={Login} /> 
        <Screen name='Home'  component={Home} /> 
      </Navigator>
    </NavigationContainer>
  ) 
}