import { StatusBar } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routers'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#0000FF"} barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}
