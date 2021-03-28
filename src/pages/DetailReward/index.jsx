import React, {useContext} from 'react';
import { StatusBar  } from 'react-native';
import {AuthContext} from '../../context/AuthContext'

import { Container,NameView,NameText,Span } from './styles';

const DetailReward =  () => {
  const {user, login, img} = useContext(AuthContext)
  // login( 'john-lenon2011@gmail.com','john').then(()=> {
  // const {user} = useContext(AuthContext)
     
  //   console.log(user)})

    console.log(user)
 
  return <Container >
    <StatusBar />
    <NameView>
      <NameText>Olá Mariana R.</NameText>
      <Span>Qual o seu sonhado destino?</Span>
    </NameView>

  </Container>
}

export default DetailReward;