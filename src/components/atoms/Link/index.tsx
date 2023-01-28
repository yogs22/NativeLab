import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Link as LinkType} from '~/types/component';

const Link = ({text, size, align}: LinkType) => {
  return (
    <View>
      <Text style={styles(size, align).text}>{text}</Text>
    </View>
  );
};

export default Link;

const styles = (
  size: number,
  align: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined,
) =>
  StyleSheet.create({
    text: {
      fontSize: size,
      color: '#7d8797',
      fontFamily: 'Nunito-Reguler',
      textDecorationLine: 'underline',
      textAlign: align,
    },
  });
