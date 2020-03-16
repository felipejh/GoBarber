import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Background from '~/components/Background';
// import { Container } from './styles';

export default function App() {
  return (
    <NavigationContainer>
      <Background>
        <View>
          <Text>a</Text>
        </View>
      </Background>
    </NavigationContainer>
  );
}
