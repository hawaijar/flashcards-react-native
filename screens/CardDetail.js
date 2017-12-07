import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.navigation.state.params.title,
      count: props.count,
      date: new Date().getTime()
    };
  }

  refresh = () => {
    this.setState({
      date: new Date().getTime()
    })
  }
  handleAddCard = title => {
    const { navigation } = this.props;
    this.props.navigation.navigate('AddQuestion', { title, refresh: this.refresh });
  };
  handleStartQuiz = () => {};

  componentWillReceiveProps(nextProps) {
    console.log('nextProps:', nextProps);
    const title = this.state.title;
    const count = nextProps.count;
    this.setState({ count });
  }

  render() {
    const {count} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 50 }}>{`${this.state.title}`}</Text>
          <Text
            style={{ fontSize: 30, color: '#333', padding: 10, paddingTop: 2 }}
          >{`${count} cards`}</Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => this.handleAddCard(`${this.state.title}`)}
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

function mapStateToProps(state, ownProps) {
  const title = ownProps.navigation.state.params.title;
  const count = state.decks[`${title}`].questions.length;
  console.log('count:', count)
  return {
    questions: state.decks[`${title}`].questions,
    count: state.decks[`${title}`].count
  };
}

export default connect(mapStateToProps, null)(CardDetail);
