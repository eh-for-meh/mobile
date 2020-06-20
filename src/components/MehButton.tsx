import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DealTheme } from '../lib/types';

interface Props {
  theme: DealTheme;
}

export default class extends Component<Props> {
  _pressMehButton = () => {
    // TODO: Implement
  }

  render(): JSX.Element {
    const { theme } = this.props;
    return <View
      style={[styles.mehButton, { backgroundColor: theme.accentColor }]}
      onTouchEnd={this._pressMehButton}
    >
      <Text
        style={[styles.mehButtonText, { color: theme.backgroundColor }]}
      >
        meh
      </Text>
    </View>;
  }
};

const styles = StyleSheet.create({
  mehButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25
  },
  mehButtonText: {
    fontSize: 18,
    textAlign: 'center'
  }
});
