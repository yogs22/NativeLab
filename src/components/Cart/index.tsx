import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import mlimage from '../../assets/image/pp-ml.jpg';

const Cart = (props: any) => {
  return (
    <View>
      <View style={styles.cartWrapper}>
        <Image source={mlimage} style={styles.iconCart} />
        <Text style={styles.notif}>{props.qty}</Text>
      </View>
      <Text style={styles.text}>Checkout</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'red',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
  },
  iconCart: {width: 50, height: 50},
  text: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '700',
    marginTop: 12,
    textAlign: 'center',
  },
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
