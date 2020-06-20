import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Deal, DealItem } from '../lib/types'
import ImageCarousel from '../components/DealImageCarousel';

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

  _getPrice = (): string => {
    const { deal } = this.state;

    const prices = deal.items.map((item: DealItem) => item.price);
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    if (maxPrice !== minPrice) {
      return `$${minPrice} - $${maxPrice}`;
    }
    return `$${minPrice}`;
  };

  render(): JSX.Element {
    const { deal } = this.state;

    const barStyle = deal.theme.foreground === "light" ? "light-content" : "dark-content";
    const accentColor = deal.theme.accentColor;
    const backgroundColor = deal.theme.backgroundColor;

    return <>
      <StatusBar barStyle={barStyle} />
      <View style={[styles.container, { backgroundColor }]}>
        <SafeAreaView style={styles.fill}>
          <ImageCarousel photos={deal.photos} theme={deal.theme} />
          <View style={styles.itemContainer}>
            <Text
              numberOfLines={2}
              adjustsFontSizeToFit={true}
              minimumFontScale={0.5}
              style={[styles.item, styles.title, { color: accentColor }]}
            >
              {deal.title}
            </Text>
            <View style={[styles.item, styles.detailsContainer]}>
              <Text style={[styles.price, { color: accentColor }]}>
                {this._getPrice()}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>;
  }
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: '100%',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  item: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: '500'
  },
  price: {
    fontSize: 20,
    flexGrow: 1
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});
