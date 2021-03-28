import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, Image, Button } from 'react-native';
import {ViewContainer, ImageComponent, Name, BagIcon, ImageContainer, ImageMask, ButtonLogIn, TextButton, DescriptionText, DescriptionContainer} from './styles';
import Background from '../../assets/background.png'
import Bag from '../../assets/card_travel.png'
import Flight from '../../assets/flight.png'

import * as Facebook from 'expo-facebook'
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const {navigate} = useNavigation();

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
        permissions: ['public_profile', 'email']
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        fetch(`https://graph.facebook.com/me?access_token=${token}`)
          .then(response => {
            navigate('Home', {token});
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
      onPress={logIn}>
        <TextButton>Entrar com o Facebook</TextButton>
      </ButtonLogIn>
    </DescriptionContainer>
      
      <StatusBar style="auto" />
    </ViewContainer>
    
    
    
  );
}
