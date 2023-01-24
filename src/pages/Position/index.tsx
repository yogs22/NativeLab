import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Cart from '../../components/Cart';

export default function Position() {
  return (
    <View style={styles.wrapper}>
      <Text>Communication component</Text>
      <Cart />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center', flexDirection: 'column'},
});
