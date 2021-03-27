import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'

export default function Routes () {
  const {Navigator, Screen} = createStackNavigator();

  return(
    <NavigationContainer>
      <Navigator>
        <Screen  component={Login} /> 
      </Navigator>
    </NavigationContainer>
  ) 
}