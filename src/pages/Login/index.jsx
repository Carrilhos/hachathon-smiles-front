import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Image , Button } from 'react-native';
import * as Facebook from 'expo-facebook'
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [isLoggedin, setLoggedinStatus] = useState(false);
  const [userData, setUserData] = useState(null);
  const {navigate} = useNavigation();

  // async function getUserAsync() {
  //   const res = await requestAsync('me');
  //   setUserData(res)
  //   alert(`Hello ${res.name} 👋`);
  // }

  // async function requestAsync(path, token) {
  //   let resolvedToken = token;
  //   if (!token) {
  //     const auth = await Facebook.getAuthenticationCredentialAsync();
  //     if (!auth) {
  //       throw new Error(
  //         'User is not authenticated. Ensure `logInWithReadPermissionsAsync` has successfully resolved before attempting to use the FBSDK Graph API.'
  //       );
  //     }
  //     resolvedToken = auth.token;
  //   }
  //   const response = await fetch(
  //     `https://graph.facebook.com/${path}?access_token=${encodeURIComponent(resolvedToken)}`
  //   );
  //   const body = await response.json();
  //   return body;
  // }

  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: '1131379430621714',
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
            navigate('Home', {token});
            setLoggedinStatus(true);
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
      {/* {isLoggedin && (
      <View>
        <Image style={{ width: 200, height: 200, borderRadius: 50 }}
      source={{ uri: userData.picture.data.url }}/>
    <Text style={{ fontSize: 22, marginVertical: 10 }}>Hi {userData.name}!</Text>
      </View>
    )} */}
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
