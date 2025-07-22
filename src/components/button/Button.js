import {
  Alert,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/action';

const Button = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const cartData = useSelector(state => state.reducer);

  useEffect(() => {
    let result = cartData.filter(item => {
      return item.id === props.item.id;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartData]);
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    ToastAndroid.show('Item added to Cart.', ToastAndroid.LONG);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
    ToastAndroid.show('Your item has been removed.', ToastAndroid.LONG);
  };

  return (
    <>
      {isAdded ? (
        <TouchableOpacity style={styles.button} onPress={handleRemoveFromCart}>
          <Text style={styles.buttonText}>{props.removeTitle} </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>{props.title} </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e66a6aff',
    padding: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
});
