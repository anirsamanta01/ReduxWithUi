import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigation = useNavigation();
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <View style={styles.imageTextContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../images/resLogo.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Restaurant</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('cart')}
        style={styles.cartIconItemWrapper}
      >
        <Icon name="cart-outline" size={28} color="#fff" />
        <View style={styles.itemView}>
          <Text style={styles.items}>{cartItems}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#b12727ff',
    padding: 15,
    alignItems: 'center',
    paddingTop: 25,
    borderColor: '#b12727ff',
    borderBottomWidth: 1,
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 100,
  },
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 10,
  },
  itemView: {
    backgroundColor: '#f34f4fff',
    paddingHorizontal: 5,
    borderRadius: 100,
    position: 'absolute',
    bottom: 18,
    left: 15,
  },
  items: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700',
  },
});
