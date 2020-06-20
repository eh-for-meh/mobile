import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

export default class extends Component {
  render(): JSX.Element {
    return <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>LoadingScreen</Text>
      </SafeAreaView>
    </>;
  }
};