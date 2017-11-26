import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

class ManageDeck extends Component {
  state = {
    title: ''
  };
  handleChange = title => {
    this.setState({ title });
  };
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.textStyle}>
          What is the title of your new deck?
        </Text>
        <TextInput
          placeholder="Deck Title"
          placeholderTextColor="#9a73ef"
          style={Styles.textInputStyle}
          onChangeText={this.handleChange}
          value={this.state.title}
        />
        <TouchableOpacity style={Styles.submitButton}>
          <Text style={Styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ManageDeck;

const Styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 40,
    padding: 5
  },
  textInputStyle: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    alignSelf: 'stretch',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: 'white'
  }
};
