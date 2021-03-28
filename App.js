import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import {ContextProvider} from './src/context/AuthContext'
 
export default function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
    
  );
}