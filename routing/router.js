import React from 'react';
import { TabNavigator } from 'react-navigation';
import DeckList from '../screens/DeckList';
import ManageDeck from '../screens/ManageDeck';

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList
  },
  ManageDeck: {
    screen: ManageDeck
  }
});

export default Tabs;
