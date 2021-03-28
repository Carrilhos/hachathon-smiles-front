import React from 'react'
import { View, Text, Image } from 'react-native'

import { Container, Title, Content, DescriptionContainer, Experience, Description } from './styles'

const Challenger = ({ image, title, description, xp }) => {
  return (
    <Container>
      <Image style={{ width: 86, height: 111 }} source={{ uri: image }} />
      <Content>
        <Title> {title} </Title>
        <DescriptionContainer>
          <Description> {description}</Description>
          <Description> {xp} XP</Description>
        </DescriptionContainer>
      </Content>
    </Container>
  )
}

export default Challenger