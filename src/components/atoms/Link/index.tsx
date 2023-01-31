import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Link as LinkType, LinkStyle} from '~/types/component';

const Link = ({style, text, size, align}: LinkType) => {
  return (
    <View style={style}>
      <Text style={styles({size, align}).text}>{text}</Text>
    </View>
  );
};

export default Link;

const styles = ({size, align}: LinkStyle) =>
  StyleSheet.create({
    text: {
      fontSize: size,
      color: '#7d8797',
      fontFamily: 'Nunito-Reguler',
      textDecorationLine: 'underline',
      textAlign: align,
    },
  });
