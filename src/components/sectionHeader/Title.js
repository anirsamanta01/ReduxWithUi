import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Title = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.heading}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(props.nav)}>
        <Text style={styles.seeAll}>{props.seeAll}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#551d1dff',
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#095274ff',
    fontSize: 15,
  },
});
