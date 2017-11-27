import React from 'react';
import { TabNavigator } from 'react-navigation';
import DeckList from '../screens/DeckList';
import ManageDeck from '../screens/ManageDeck';
import { TouchableOpacity, Text } from 'react-native';

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ tintColor }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('DeckList', { date: new Date() })}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>DeckList</Text>
        </TouchableOpacity>
      )
    })
  },
  ManageDeck: {
    screen: ManageDeck
  }
});

export default Tabs;
