import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native'
import {
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons'

import Login from './pages/Login'
import Home from './pages/Home'
const TabNav = createBottomTabNavigator()

export default function Routes () {
  const {Navigator, Screen} = createStackNavigator();



  const  TabScreens = () => (
    <TabNav.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        switch (route.name) {
          case 'Recompensas':
            return (
              <>
                {focused && (
                  <View
                    style={{
                      width: 30,
                      height: 4,
                      backgroundColor: '#FF7020',
                      position: 'absolute',
                      top: 0,
                      borderRadius: 6,
                    }}
                  />
                )}
                <FontAwesome
                  name='star'
                  size={size}
                  color={focused ? '#FF7020' : color}
                  // style={{ paddingTop: 10 }}
                />
              </>
            )

          case 'Desafios':
            return (
              <>
                {focused && (
                  <View
                    style={{
                      width: 30,
                      height: 4,
                      backgroundColor: '#FF7020',
                      position: 'absolute',
                      top: 0,
                      borderRadius: 6,
                    }}
                  />
                )}
                <MaterialIcons
                  name={'local-fire-department'}
                  size={size}
                  color={focused ? '#FF7020' : color}
                />
              </>
            )

          default:
            return (
              <>
                {focused && (
                  <View
                    style={{
                      width: 30,
                      height: 4,
                      backgroundColor: '#FF7020',
                      position: 'absolute',
                      top: 0,
                      borderRadius: 6,
                    }}
                  />
                )}
                <FontAwesome5
                  name={'user'}
                  size={size}
                  color={focused ? '#FF7020' : color}
                />

              </>
            )
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: '#707070',
      inactiveTintColor: '#C1C1C1',

      tabStyle: {
        justifyContent: 'center',
      },

      labelStyle: {
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: -10,
      },
      style: {
        height: 71,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    }}>
      <TabNav.Screen name='Desafios' component={Home} />
      <TabNav.Screen name='Recompensas' component={Home} />
      <TabNav.Screen name='Perfil' component={Home} />
    </TabNav.Navigator>
  )

  return(
    <NavigationContainer>
    <Navigator >
    <Screen name='Home'  component={TabScreens} /> 

    <Screen name='Login'  component={Login} /> 
    </Navigator>
   
    </NavigationContainer>
    
  ) 
}