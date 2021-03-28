import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, Image, Button } from 'react-native';
import {ViewContainer, ImageComponent, Name, BagIcon, ImageContainer, ImageMask, ButtonLogIn, TextButton, DescriptionText, DescriptionContainer} from './styles';
import Background from '../../assets/background.png'
import Bag from '../../assets/card_travel.png'
import Flight from '../../assets/flight.png'
import api from '../../services/api'

import * as Facebook from 'expo-facebook'
import { useNavigation } from '@react-navigation/native';

export default function LoginFacebook() {
  const {navigate} = useNavigation();

  async function logInFacebook() {
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
        permissions: ['public_profile', 'email']
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        fetch(`https://graph.facebook.com/me?access_token=${token}`)
          .then(response => {
            // navigate('Home', {token});
            store(token);
          })
          
          .catch(e => console.log(e))
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  async function store(token) {
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
    `https://graph.facebook.com/me?fields=id,name,email,picture.height(500)&access_token=${encodeURIComponent(resolvedToken)}`
    );
    const body = await response.json();
    const user = {
      username : body.name,
      email : body.email,
    }

    try{
      await api.post('/user', user).then((response) => {
        loginApi(response.data, body);
      })
    }
    catch(error){
      loginApi(user,body)
    }
  }

  async function loginApi(data, body) {
    api.post('/session', {username : data.name, email: data.email}).then(({data}) => {
      navigate('Home',{data, body});
    }).catch((err) => alert(err))
  }

  return (
    <ViewContainer >
      <ImageContainer>
        <ImageComponent 
        source={ Background }
        />
        <ImageMask>
          <Image
          style={{
            height: 100,
          }}
          source={ Flight }
          />
        </ImageMask>
      </ImageContainer>
    <DescriptionContainer>
    <Name>
        <BagIcon source={ Bag } />
      <Text style={{fontWeight: 'bold'}}>Smiles</Text>
      <Text>Travel</Text>
      </Name>

      <DescriptionText>
      Acumule milhas através de desafios e 
      torne o sonho de viajar pelo mundo
      em realidade.
      </DescriptionText>
      <ButtonLogIn 
      onPress={logInFacebook}>
        <TextButton>Entrar com o Facebook</TextButton>
      </ButtonLogIn>
    </DescriptionContainer>
      <StatusBar style="auto" />
    </ViewContainer>

  );
}
