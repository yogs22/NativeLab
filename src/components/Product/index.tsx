import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import mlimage from '../../assets/image/pp-ml.jpg';

const Product = (props: any) => {
  return (
    <View style={styles.wrapper}>
      <Image source={mlimage} style={styles.productImage} />
      <Text style={styles.productName}>Diamond Mobile Legends</Text>
      <Text style={styles.productPrice}>Rp 100.000</Text>
      <Text>Moonton</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Beli Sekarang</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 8,
  },
  productImage: {width: 188, height: 107, borderRadius: 8},
  productName: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 14,
  },
  productPrice: {color: 'orange', marginTop: 10, marginBottom: 10},
  buttonWrapper: {
    backgroundColor: 'crimson',
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {color: '#fff', textAlign: 'center'},
});
