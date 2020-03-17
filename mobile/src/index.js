import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Background from '~/components/Background';

import SignStack from '~/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Background>
        <SignStack />
      </Background>
    </NavigationContainer>
  );
}
