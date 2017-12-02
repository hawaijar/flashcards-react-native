import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

class AddQuestion extends Component {
  state = {
    question: '',
    answer: ''
  };
  updateQuestion = e => {
    const question = e.target.value;
    this.setState({ question });
  };
  updateAnswer = e => {
    const answer = e.target.value;
    this.setState({ answer });
  };

  handleSubmit = () => {
    const card = this.props.navigation.state.params['title'];
    Alert.alert('Hello:', card);
  };
  render() {
    return (
      <View>
        <View style={styles.question}>
          <TextInput
            placeholder="Add question"
            placeholderTextColor="#9a73ef"
            style={styles.textInputStyle}
            onChangeText={this.updateQuestion}
            value={this.state.question}
          />
        </View>
        <View style={styles.answer}>
          <TextInput
            placeholder="Enter options"
            placeholderTextColor="#9a73ef"
            style={styles.textInputStyle}
            onChangeText={this.updateAnswer}
            value={this.state.answer}
          />
        </View>
        <TouchableOpacity
          onPress={this.handleSubmit}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    marginTop: 30
  },
  answer: {
    marginTop: 30
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
    alignSelf: 'center',
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: 'white'
  }
});

export default AddQuestion;
