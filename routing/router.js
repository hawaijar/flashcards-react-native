import React from 'react';
import { TabNavigator } from 'react-navigation';
import { TouchableOpacity, Text } from 'react-native';
import StackRouter from '../screens/StackRouter';
import DeckList from '../screens/DeckList';
import ManageDeck from '../screens/ManageDeck';

const Tabs = TabNavigator({
  DeckList: {
    screen: StackRouter,
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
    screen: ManageDeck,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ tintColor }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ManageDeck', { date: new Date() })}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>ManageDeck</Text>
        </TouchableOpacity>
      )
    })
  }
});

export default Tabs;
