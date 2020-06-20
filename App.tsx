/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import DealScreen from './src/screens/DealScreen';
import LoadingScreen from './src/screens/LoadingScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
        }}
      >
        <Stack.Screen name="loading" component={LoadingScreen}></Stack.Screen>
        <Stack.Screen name="deal" component={DealScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
