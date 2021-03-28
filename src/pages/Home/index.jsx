import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { MainContainer, ChallengerText, NameContainer, Name, SubName, TextChallengerContainer } from './styles'
import Card from '../../Components/Card'
import Challenger from '../../Components/Challengers'

import { getChallenger } from '../../services/challengers'

export default function Home() {
  const [challengers, setChallengers] = useState([])

  const { params } = useRoute();
  const { user: { username } } = params.user;


  useEffect(() => {
    getApiData()
  }, [])

  const getApiData = async () => {
    try {
      const { data } = await getChallenger()
      setChallengers(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MainContainer>
      <NameContainer>
        <Name> Olá, {username}! </Name>
        <SubName> O que você fará hoje?</SubName>
      </NameContainer>
      <View>
        <FlatList
          data={challengers}
          keyExtractor={challenger => String(challenger.id)}
          horizontal={true}
          renderItem={({ item }) => (
            <Card title={item.name} description={item.description} xp={item.exp_value} image={item.file.path} />
          )}
        />

      </View>

      <TextChallengerContainer>
        <ChallengerText> Desafios </ChallengerText>
      </TextChallengerContainer>
      <FlatList
        data={challengers}
        keyExtractor={challenger => String(challenger.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Challenger title={item.name} description={item.description} xp={item.exp_value} image={item.file.path} />
        )}
      />

    </MainContainer>
  )
}
