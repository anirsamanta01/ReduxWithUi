import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <View>{children}</View>
      <Footer />
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({});
