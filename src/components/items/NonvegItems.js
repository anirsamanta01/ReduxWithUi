import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Title from '../sectionHeader/Title';
import { nonVegItemsData } from '../data/nonVegItemsData';
import Button from '../button/Button';

const NonvegItems = () => {
  return (
    <View style={styles.container}>
      <Title title="Non-Vegges" seeAll="See All" nav="all-non-vegges-items" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 5 }}
      >
        {nonVegItemsData.map((item, index) => (
          <View style={styles.cardContainer} key={item.id}>
            <TouchableOpacity>
              <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.priceText}>Price: ${item.price}</Text>
            <Button
              title="Add to Cart"
              item={item}
              removeTitle="Remove from Cart"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NonvegItems;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#f15050ff',
    paddingVertical: 15,
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    marginTop: 10,
    alignItems: 'center',
    marginRight: 15,
  },
  image: {
    width: 145,
    height: 120,
    resizeMode: 'contain',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  priceText: {
    fontSize: 15,
    color: '#000000',
    marginBottom: 2,
  },
});
