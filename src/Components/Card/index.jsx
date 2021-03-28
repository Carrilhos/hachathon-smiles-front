import React from 'react'
import { View, Text, Image } from 'react-native'

import { Container, StyledImage, Title, ContainerText, Description, Experience, DescriptionContainer } from './styles'

const Card = ({ title, description, xp, image }) => {
  return (
    <Container>
      <View>
        <StyledImage source={{ uri: image }} />
      </View>
      <ContainerText>
        <Title>{title}</Title>
        <DescriptionContainer>
          <Description> {description} </Description>
          <Experience> {xp} XP</Experience>
        </DescriptionContainer>
      </ContainerText>
    </Container>
  )
}

export default Card