import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image , Button } from 'react-native';
import * as Facebook from 'expo-facebook'
import { useRoute} from '@react-navigation/native'

export default function Home() {
  const {params} = useRoute();
  const body = params.body;
  const [user, setUser] = useState({});
  const [picture, setPicture] = useState('');
  setUser(body);
  setPicture(body.picture.data.url);

  return (
    <View style={styles.container}>
      <Image style={{ width: 200, height: 200, borderRadius: 50 }}
      source={{ uri: picture, }}/>
      
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
