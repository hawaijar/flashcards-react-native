import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class CardDetail extends Component {
  handleAddCard = (title) => {
    this.props.navigation.navigate('AddQuestion', title);
  };
  handleStartQuiz = () => {};
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 50 }}>{`${navigation.state.params
            .title}`}</Text>
          <Text style={{ fontSize: 30, color: '#333', padding: 10, paddingTop: 2 }}>{`${navigation.state
            .params.count} cards`}</Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => this.handleAddCard(`${navigation.state.params.title}`)}
            style={styles.pressButton}
          >
            <Text style={{ color: 'white' }}> Add Card </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleStartQuiz}
            style={styles.pressButton}
          >
            <Text style={{ color: 'white' }}> Start Quiz </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    alignSelf: 'center',
    padding: 10,
    margin: 15
  },
  footer: {
    alignSelf: 'center',
    marginTop: 50
  },
  pressButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    marginTop: 15,
    height: 40
  }
});

export default CardDetail;
