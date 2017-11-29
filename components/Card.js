import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native';

class Card extends Component {
  Pressed = () => {
    this.props.onclickHandle();
  };
  render() {
    const { title, count } = this.props;
    return (
      <TouchableHighlight underlayColor={'gray'} onPress={this.Pressed}>
        <View style={styles.container}>
          <View>
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
          <View>
            <Text style={styles.countStyle}>{count} cards</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 40
  },
  countStyle: {
    fontSize: 20,
    color: '#666666'
  }
});

export default Card;
