import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Layout from '../layout/Layout';
import NonvegItems from '../items/NonvegItems';
import VeggesItems from '../items/VeggesItmes';

const Home = () => {
  return (
    <Layout>
      <NonvegItems />
      <VeggesItems />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({});
