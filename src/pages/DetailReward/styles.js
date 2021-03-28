import styled from 'styled-components/native';
import Constants from 'expo-constants'

export const Container = styled.View`
  flex:1;
  padding-top: ${Constants.statusBarHeight + 20}px;
  padding-left: 16px;
`;

export const NameView = styled.View`

`;

export const NameText = styled.Text`

font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 27px;


color: #313131;
`;

export const Span = styled.Text`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;

opacity: 0.5;


color: #313131;
`
