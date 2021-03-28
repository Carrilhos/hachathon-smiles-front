import styled from 'styled-components'
import { View, Image, Text, TouchableOpacity } from 'react-native';


export const ViewContainer = styled(View)`
    display: flex;
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: flex-start;
`
export const ImageContainer = styled(View)`
      position: relative;
      width: 100%;
      height: 70%;
`
export const ImageMask = styled(View)`
background: rgba(0, 0, 0, 0.5);
position: absolute;
top: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const ImageComponent = styled(Image)`
    width: 100%;
    height: 100%;
`


export const DescriptionContainer = styled(View)`
width: 100%;
height:25%;
display: flex;
align-items: center;
justify-content: space-evenly;
`

export const BagIcon = styled(Image)`
    width: 24px;
    height: 24px;
`

export const Name = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ButtonLogIn = styled(TouchableOpacity)`
width: 328px;
height: 56px;

background: #1877F2;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
`

export const TextButton = styled(Text)`
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
color: #fff;
`

export const DescriptionText = styled(Text)`
width: 60%;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #FF7020;
`