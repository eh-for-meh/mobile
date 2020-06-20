import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Deal } from '../lib/types'

type RouteParams = {
  deal: Deal
};

interface Props extends StackScreenProps<RouteParams> { }

interface State {
  deal: Deal;
}

export default class extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { route } = this.props;
    const params: RouteParams = route.params as RouteParams;
    this.state = {
      deal: params.deal
    };
  }

  render(): JSX.Element {
    const { deal } = this.state;

    const barStyle = deal.theme.foreground === "light" ? "light-content" : "dark-content";
    const accentColor = deal.theme.accentColor;
    const backgroundColor = deal.theme.backgroundColor;

    return <>
      <StatusBar barStyle={barStyle} />
      <View style={[styles.container, { backgroundColor }]}>
        <SafeAreaView>
          <Text
            numberOfLines={2}
            adjustsFontSizeToFit={true}
            minimumFontScale={0.5}
            style={[styles.title, { color: accentColor }]}
          >
            {deal.title}
          </Text>
        </SafeAreaView>
      </View>
    </>;
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 36,
    margin: 16,
  }
});
