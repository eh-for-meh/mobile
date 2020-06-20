import React, { Component } from 'react';
import { Animated, StatusBar, StyleSheet } from 'react-native';
import * as DealsAPI from '../api/deals';

interface State {
  foreground: 'light' | 'dark';
  backgroundColor: string;
}

export default class extends Component<any, State> {
  colorAnimatedValue: Animated.Value;

  constructor(props: any) {
    super(props);
    this.colorAnimatedValue = new Animated.Value(0);
    this.state = {
      backgroundColor: "#FFFFFF",
      foreground: 'dark'
    };
  }

  componentDidMount(): void {
    this._loadDeal();
  }

  _loadDeal = async () => {
    try {
      const deal = await DealsAPI.getCurrentDeal();
      const { backgroundColor, foreground } = deal.theme;
      this.setState({ backgroundColor });
      Animated.timing(this.colorAnimatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
      }).start(() => {
        this.setState({ foreground });
        // TODO: Navigate to deal screen
      });
    } catch (err) {
      // TODO: Handle error
      console.warn(err);
    }
  };

  render(): JSX.Element {
    const { foreground } = this.state;

    const barStyle = foreground === "light" ? "light-content" : "dark-content";

    const opacity = this.colorAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    });
    const backgroundColor = this.colorAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['#FFFFFF', this.state.backgroundColor]
    });

    return <>
      <StatusBar barStyle={barStyle} />
      <Animated.View style={[styles.container, { backgroundColor }]}>
        <Animated.Text style={[styles.title, { opacity }]}>
          eh for meh
        </Animated.Text>
      </Animated.View>
    </>;
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 30
  }
});
