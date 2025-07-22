import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PriceTable = ({ price, name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  );
};

export default PriceTable;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: "500",
    color: "#333",
  },
});
