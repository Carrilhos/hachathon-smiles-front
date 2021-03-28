import React from 'react';
import {Header, Container, RewardContainer} from './styles';
import { Image, Text, View } from 'react-native';

import Background from '../../assets/background.png'

export default function Rewards() {
  return(
    <Container>
      <Header>
        <Text>Olá, Mariana R.</Text>
        <Text>Qual o seu sonhado destino?</Text>
      </Header>
      <RewardContainer>
        <Text>Nível 03</Text>
        <Text>3.250 de 4.000xp</Text>

        <Image
          style={{
            height: 150,
            borderRadius: 8,
          }}
          source={ Background }
          />
      </RewardContainer>
      
    </Container>
  )
}