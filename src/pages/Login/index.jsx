import { StatusBar } from 'expo-status-bar';
import expo from 'expo'
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Facebook from 'expo-facebook'

export default function App() {

  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: '426357505128962',
      });
      
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } =  await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile']
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?fields=email,name,id,first_name,last_name&access_token=${token}`);
        alert(`Hi ${response.data}!`);
        console.log(response)
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Login Caralho</Text>
      <Button
      onPress={logIn}
      title='LogIn'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
