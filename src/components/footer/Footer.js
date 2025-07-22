import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
    const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>Total Cart Items</Text>
        </View>
        <View style={styles.itemsView}>
          <Text style={styles.items}>{cartItems} </Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f15050ff',
    padding: 15,
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000000',
    marginRight: 8,
  },
  items: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  itemsView: {
    backgroundColor: '#f15050ff',
    padding: 15,
    paddingVertical: 5,
    elevation: 4,
    borderRadius: 5,
  },
});
