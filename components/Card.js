import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, count }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <View>
        <Text style={styles.countStyle}>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#666666',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleStyle: {
    fontSize: 40
  },
  countStyle: {
    fontSize: 20,
    color: '#666666'
  }
});

export default Card;
