import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import * as DealsAPI from '../api/deals';

export default class extends Component {
  componentDidMount(): void {
    DealsAPI.getCurrentDeal().catch(console.error);
  }

  render(): JSX.Element {
    return <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>LoadingScreen</Text>
      </SafeAreaView>
    </>;
  }
};