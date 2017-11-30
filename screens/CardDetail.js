import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CardDetail extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={{fontSize: 50}}>{`${navigation.state.params.title}`}</Text>
          <Text style={{fontSize: 30, color: '#333'}}>{`${navigation.state.params.count} cards`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  body: {}
});

export default CardDetail;
