import styled from 'styled-components'
import { View, Text } from 'react-native'

export const Container = styled(View)`
  width: 328px;
  height: 111px;
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  background-color: #f0f0f0 ;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #313131;
`

export const DescriptionContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Experience = styled(Text)` `

export const Content = styled(View)`
  padding-left: 14px;
  display: flex;
  justify-content: center
`

export const Description = styled(Text)`
  font-size: 14px;
  line-height: 17px;
  color: #313131;
`
