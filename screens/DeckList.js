import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView
} from 'react-native';

class DeckList extends Component {
  state = {
    decks: {}
  };
  onclickHandle = (title, count) => {
    this.props.navigation.navigate('Detail', { title, count });
  };

  buildCards = () => {
    const { decks } = this.props;
    if (Object.keys(decks).length === 0) {
      return (
        <View>
          <Text>No Decks available</Text>
        </View>
      );
    }
    return Object.keys(decks).map(deck => {
      const { title, questions } = decks[`${deck}`];
      const count = questions.length;
      return (
        <Card
          key={title}
          title={title}
          count={count}
          onclickHandle={this.onclickHandle}
        />
      );
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ decks: nextProps.decks });
  }

  render() {
    return (
      <ScrollView>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={Styles.vertical}>{this.buildCards()}</View>
        )}
      </ScrollView>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps, null)(DeckList);

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
