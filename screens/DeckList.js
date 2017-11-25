import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeckList = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>Deck List screen</Text>
    </View>
  )
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
  }
}
