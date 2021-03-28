import styled from 'styled-components'
import { View, Text, Image } from 'react-native'

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #313131;

`

export const ContainerText = styled(View)`
  display: flex;
  flex-direction: column;
  margin-top: 12px
`

export const Description = styled(Text)`
  font-size: 14px;
  line-height: 17px;
  color: #313131;
`

export const DescriptionContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Experience = styled(Text)` `

export const Container = styled(View)`
  width: 277px;
  height: 215px;
  padding-right: 16px;
  margin-top: 16px;
`

export const StyledImage = styled(Image)`
  width: 260px;
  height: 156;
  border-radius: 8px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.06);
`