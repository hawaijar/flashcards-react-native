import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import DeckList from './DeckList';
import CardDetail from './CardDetail';

const StackRouter = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: ({ navigation }) => ({
      title: 'DeckList'
    })
  },
  Detail: {
    screen: CardDetail,
    navigationOptions: props => ({
      title: `${props.navigation.state.params.title}`
    })
  }
});

export default StackRouter;
