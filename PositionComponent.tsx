import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import imageml from './pp-ml.jpg';

export default function PositionComponent() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={imageml} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Checkout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center', flexDirection: 'column'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'red',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 12},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'green',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
