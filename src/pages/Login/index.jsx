import { StatusBar } from 'expo-status-bar';
import expo from 'expo'
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Facebook from 'expo-facebook'

export default function App() {
  const [isLoggedin, setLoggedinStatus] = useState(false);
  const [userData, setUserData] = useState(null);

  async function getUserAsync() {
    const { name } = await requestAsync('me');
    alert(`Hello ${name} 👋`);
  }

  async function requestAsync(path, token) {
    let resolvedToken = token;
    if (!token) {
      const auth = await Facebook.getAuthenticationCredentialAsync();
      if (!auth) {
        throw new Error(
          'User is not authenticated. Ensure `logInWithReadPermissionsAsync` has successfully resolved before attempting to use the FBSDK Graph API.'
        );
      }
      resolvedToken = auth.token;
    }
    const response = await fetch(
      `https://graph.facebook.com/${path}?access_token=${encodeURIComponent(resolvedToken)}`
    );
    const body = await response.json();
    return body;
  }

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
        fetch(`https://graph.facebook.com/me?access_token=${token}`)
          .then(response => {
            getUserAsync();
            setLoggedinStatus(true);
            alert(response.data);
            setUserData(response.data);
          })
          
          .catch(e => console.log(e))
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
