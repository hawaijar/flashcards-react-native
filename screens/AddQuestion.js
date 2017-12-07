import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions';
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
  updateQuestion = question => {
    this.setState({ question });
  };
  updateAnswer = answer => {
    this.setState({ answer });
  };

  handleSubmit = () => {
    console.log('this.props.navigation.state:', this.props.navigation.state);
    const title = this.props.navigation.state.params['title'];
    const question = this.state.question;
    const answer = this.state.answer;
    this.props.newCard(title, question, answer);
    this.setState(prevState => {
      return {
        title: '',
        question: '',
        answer: ''
      };
    }, () => {
      this.props.navigation.state.params.refresh();
    });
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
            placeholder="Enter answer"
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
function mapDispatchToActions(dispatch) {
  console.log('whew...')
  return {
    newCard(title, question, answer) {
      dispatch(addCard(title, question, answer));
    }
  };
}

export default connect(null, mapDispatchToActions)(AddQuestion);
