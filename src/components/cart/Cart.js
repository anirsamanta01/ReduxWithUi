import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ArrowWithScreenName from '../ArrowWithScreenName';
import PriceTable from './PriceTable';

import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartData = useSelector(state => state.reducer);

  return (
    <View style={styles.container}>
      <ArrowWithScreenName icon="arrow-left" screen="Cart" />
      <Text style={styles.heading}>
        {cartData?.length > 0
          ? `You have ${cartData?.length} item left in Your Cart.`
          : 'Oops! Your Cart is Empty!'}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {cartData?.length > 0 && (
            <>
              {cartData?.map((item, index) => (
                <CartItem item={item} key={item.id} />
              ))}
              <View>
                <PriceTable
                  name={'Tax'}
                  price={`$${cartData
                    .reduce((total, item) => total + item.tax * item.qnt, 0)
                    .toFixed(2)}`}
                />
                <PriceTable
                  name={'Shipping'}
                  price={`$${cartData
                    .reduce(
                      (total, item) => total + item.shipping * item.qnt,
                      0,
                    )
                    .toFixed(2)}`}
                />
                <View style={styles.border}>
                  <PriceTable
                    name={'Grand Total'}
                    price={`$${cartData
                      .reduce(
                        (total, item) =>
                          total +
                          (item.price + item.tax + item.shipping) * item.qnt,
                        0,
                      )
                      .toFixed(2)}`}
                  />
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f15050ff',
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  heading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  border: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#fff',
    padding: 5,
    margin: 15,
  },
});
