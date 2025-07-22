import {
  Alert,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux';

const CountButton = ({ value, onChange, item }) => {
  const dispatch = useDispatch();
  const handleAddQty = () => {
    if (value >= 10) {
      return alert('You cant add more than 10 quantity!');
    }
    onChange(value + 1);
  };
  const handleRemoveQty = () => {
    if (value <= 1) {
      return;
    }
    onChange(value - 1);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
    ToastAndroid.show('Your item has been removed.', ToastAndroid.LONG);
  };

  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <TouchableOpacity onPress={handleRemoveQty} style={styles.countButton}>
          <Text style={styles.number}>--</Text>
        </TouchableOpacity>
        <Text style={styles.number}>{value}</Text>
        <TouchableOpacity onPress={handleAddQty} style={styles.countButton}>
          <Text style={styles.number}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={handleRemoveFromCart}>
          <Text style={styles.btnText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countButton: {
    backgroundColor: 'orange',
    paddingLeft: 12,
    paddingHorizontal: 2,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  number: {
    marginRight: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    marginTop: 15,
    backgroundColor: '#e96161ff',
    padding: 10,
    borderRadius: 30,
    paddingVertical: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },
});
