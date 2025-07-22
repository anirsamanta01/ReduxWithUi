import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CountButton from '../button/CountButton';
import { useDispatch } from 'react-redux';
import { updateQty } from '../redux/action';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
console.log('Item Info...:', item.name, 'Qnt:', item.qnt, 'Price:', item.price);

  return (
    <View style={styles.container}>
      <Image source={item?.image} style={styles.image} />
      <View style={{ flex: 1, flexWrap: 'nowrap', marginLeft: 10 }}>
        <Text style={styles.text}> {item?.name}</Text>
        <Text style={styles.text}>
          Price: ${((item.price) * (item.qnt))}
        </Text>
      </View>
      <CountButton
        value={item.qnt}
        onChange={newQty => dispatch(updateQty(item.id, newQty))}
        item={item}
      />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
    borderRadius: 10,
    elevation: 4,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});
