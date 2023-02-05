import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Link as LinkType, LinkStyle} from '~/types/component';
import {colors, fonts} from '~/utils';

const Link = ({style, text, size, align, onPress}: LinkType) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={styles({size, align}).text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = ({size, align}: LinkStyle) =>
  StyleSheet.create({
    text: {
      fontSize: size,
      color: colors.text.secondary,
      fontFamily: fonts.primary[400],
      textDecorationLine: 'underline',
      textAlign: align,
    },
  });
