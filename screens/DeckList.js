import React, { Component } from 'react';
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
    decks: []
  };
  _fetchDecks = async () => {
    const store = await AsyncStorage.getItem(DeckList.KEY_STORAGE);
    return store;
  };

  displayDecks = decks => {};
  componentDidMount() {
    // this._fetchDecks()
    //   .then(store => {
    //     if (store !== null) {
    //       const decks = JSON.parse(store);
    //       console.log('decks:', decks);
    //       if (Object.keys(decks).length > 0) {
    //         this.setState({
    //           decks
    //         });
    //       }
    //     }
    //   })
    //   .catch(e => console.log(e));
  }
  componentWillUpdate() {
    console.log('here!');
  }
  render() {
    console.log('here');
    return (
      <ScrollView>
        <View style={Styles.vertical}>
          <Text style={Styles.textStyle}>Deck List screen</Text>
        </View>
      </ScrollView>
    );
  }
  componentDidUpdate(prevProps, prevState) {
  //   this._fetchDecks()
  //     .then(store => {
  //       if (store !== null) {
  //         const decks = JSON.parse(store);
  //         console.log('decks:', decks);
  //         if (Object.keys(decks).length > 0) {
  //           this.setState({
  //             decks
  //           });
  //         }
  //       }
  //     })
  //     .catch(e => console.log(e));
  // }
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
