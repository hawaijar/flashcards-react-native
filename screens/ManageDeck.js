import React from 'react';
import { View, Text } from 'react-native';

const ManageDeck = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>ManageDeck screen</Text>
    </View>
  )
}

export default ManageDeck;

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
