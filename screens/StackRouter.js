import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import DeckList from './DeckList';
import CardScreen from './CardScreen';

const StackRouter = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: ({ navigation }) => ({
      title: 'DeckList'
    })
  },
  Detail: {
    screen: CardScreen,
    navigationOptions: props => ({
      title: 'Card Info'
    })
  }
});

export default StackRouter;
