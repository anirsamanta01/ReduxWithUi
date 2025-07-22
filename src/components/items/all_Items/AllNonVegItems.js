import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import { allNonVegItemsData } from '../../data/allNonvegItemsData';
import Button from '../../button/Button';
import ArrowWithScreenName from '../../ArrowWithScreenName';

const AllNonVegItems = () => {
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>Price: ${item.price}</Text>
      <Button title="Add to Cart" item={item} removeTitle="Remove from Cart" />
    </View>
  );

  return (
    <View style={styles.container}>
      <ArrowWithScreenName icon="arrow-left" screen="All Items" cartIcon="cart" />
      <FlatList
        data={allNonVegItemsData}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 15 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AllNonVegItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f15050ff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
    textAlign: 'center',
  },
  priceText: {
    fontSize: 15,
    color: '#000000',
    marginBottom: 2,
  },
});
