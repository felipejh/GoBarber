import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import './config/ReactotronConfig';
import Background from '~/components/Background';

import SignStack from '~/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Background>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <SignStack />
      </Background>
    </NavigationContainer>
  );
}
