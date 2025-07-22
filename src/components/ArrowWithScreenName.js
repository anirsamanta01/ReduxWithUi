import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const ArrowWithScreenName = props => {
  const navigation = useNavigation();
    const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <View style={styles.iconText}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={props.icon} size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.screenName}>{props.screen}</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('cart')}>
        <Icon name={props.cartIcon} size={26} color="#fff" />
        <View style={styles.itemView}>
          <Text style={styles.items}>{cartItems} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ArrowWithScreenName;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconText: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
  screenName: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 18,
  },
  itemView: {
    backgroundColor: '#ee0d0dff',
    paddingHorizontal: 5,
    borderRadius: 100,
    position: 'absolute',
    bottom: 16,
    left: 12,
  },
  items: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700',
  },
});
