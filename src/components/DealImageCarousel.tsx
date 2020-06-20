import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DealTheme } from '../lib/types';

interface Props {
  photos: string[];
  theme: DealTheme;
}

interface State {
  index: number;
}

const imageWidth = Dimensions.get('window').width;
const imageHeight = imageWidth * 4 / 3;

export default class extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  _updateIndex = (offset: number) => {
    const index = (offset / imageWidth).toFixed(0);
    this.setState({ index: Number(index) });
  };

  render(): JSX.Element {
    const { photos, theme } = this.props;
    const { index } = this.state;

    return <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.scrollView}
        onScroll={(e) => this._updateIndex(e.nativeEvent.contentOffset.x)}
        scrollEventThrottle={200}
      >
        {photos.map((photo: string, i: number) => {
          return <View
            key={i}
            style={styles.imageContainer}
          >
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{ uri: photo }}
            />
          </View>;
        })}
      </ScrollView>
      <View style={styles.selectionIndicatorContainer}>
        {photos.map((_: string, i: number) => {
          const selected = i === index;
          const selectedColor = theme.foreground === 'light' ? 'black' : 'white';
          return <View
            key={i}
            style={[
              styles.selectionIndicator,
              { backgroundColor: selected ? selectedColor : theme.accentColor }
            ]} />;
        })}
      </View>
    </View>;
  }
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    height: 'auto'
  },
  imageContainer: {
    width: imageWidth,
    height: imageHeight,
    padding: 16
  },
  image: {
    flex: 1
  },
  selectionIndicatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  selectionIndicator: {
    width: 8,
    height: 8,
    margin: 4,
    borderRadius: 4
  }
});
