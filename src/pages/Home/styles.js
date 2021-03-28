import styled from 'styled-components'
import { View, Text } from 'react-native'

import Constants from 'expo-constants'

export const MainContainer = styled(View)`
  background-color: #FAFAFA;
  display: flex;
  flex: 1;
  padding-top: ${Constants.statusBarHeight + 20};
  padding-right: 16px;
  padding-left: 16px; 
`

export const NameContainer = styled(View)`
  display: flex;
  align-items: flex-start;
`

export const ChallengerText = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #313131;
`

export const Name = styled(Text)`
  font-size: 22px;
  line-height: 27px;
  color: #313131;
  font-weight: bold
`

export const SubName = styled(Text)`
  font-size: 14px;
  line-height: 17px;
  color: #313131;
  opacity: 0.5;
`

export const TextChallengerContainer = styled(View)`
  display: flex;
  align-items: center;
  margin-top: 30px;
`