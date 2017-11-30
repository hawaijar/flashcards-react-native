import React, { Component } from 'react';
import Card from '../components/Card';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  AsyncStorage
} from 'react-native';

class DeckList extends Component {
  static KEY_STORAGE = 'decks';
  state = {
    loading: true,
    decks: {}
  };
  _fetchDecks = async () => {
    const store = await AsyncStorage.getItem(DeckList.KEY_STORAGE);
    return store;
  };

  onclickHandle = (title, count) => {
    this.props.navigation.navigate('Detail', {title, count});
  };

  buildCards = () => {
    if (Object.keys(this.state.decks).length === 0) {
      return (
        <View>
          <Text>No Decks available</Text>
        </View>
      );
    }
    return Object.keys(this.state.decks).map(deck => {
      const title = deck;
      const count = this.state.decks[`${deck}`].questions.length;
      return (
        <Card
          key={title}
          title={title}
          count={count}
          onclickHandle={this.onclickHandle}
        />
      );
    });
  };
  componentWillMount() {
    this._fetchDecks()
      .then(store => {
        if (store !== null) {
          const decks = JSON.parse(store);
          this.setState({ decks, loading: false });
        }
      })
      .catch(e => console.log(e));
  }
  render() {
    return (
      <ScrollView>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={Styles.vertical}>{this.buildCards()}</View>
        )}
      </ScrollView>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    this._fetchDecks()
      .then(store => {
        if (store !== null) {
          const decks = JSON.parse(store);
          if (Object.keys(this.state.decks).length === 0) {
            this.setState({ decks });
          } else {
            const decksList = Object.keys(decks);
            const currentDecksList = Object.keys(this.state.decks);
            console.log('current decks:', currentDecksList);
            console.log('updated decks:', decksList);
            if (
              decksList.length == currentDecksList.length &&
              decksList.every((v, i) => v === currentDecksList[i])
            ) {
              return;
            } else {
              this.setState({ decks });
            }
          }
        }
      })
      .catch(e => console.log(e));
  }
}

export default DeckList;

const Styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 30
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  vertical: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 8
  }
};
