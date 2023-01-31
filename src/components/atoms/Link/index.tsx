import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Link as LinkType, LinkStyle} from '~/types/component';
import {colors} from '~/utils';

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
      color: colors.text.secondary,
      fontFamily: 'Nunito-Reguler',
      textDecorationLine: 'underline',
      textAlign: align,
    },
  });
