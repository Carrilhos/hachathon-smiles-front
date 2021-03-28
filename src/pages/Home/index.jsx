import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image , Button } from 'react-native';
import * as Facebook from 'expo-facebook'
import { useRoute} from '@react-navigation/native'

export default function Home() {
  const {params} = useRoute();
  const token = params.token;
  const [user, setUser] = useState({});

  useEffect( async () => {
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
      `https://graph.facebook.com/me?access_token=${encodeURIComponent(resolvedToken)}&fields=id,name,email,picture.height(500)`
    );
    const body = await response.json();
    console.log(body);
    console.log(body.picture.data.url);
    setUser(body);
  },[])

  return (
    <View style={styles.container}>
      <Text>olaa</Text>
      <Image style={{ width: 200, height: 200, borderRadius: 50 }}
      source={{ uri: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3916380225090727&height=500&ext=1619484148&hash=AeQTRDRyWSSkER-fork', }}/>
      <Text style={{ fontSize: 22, marginVertical: 10 }}>Hi {user.name}!</Text>
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
