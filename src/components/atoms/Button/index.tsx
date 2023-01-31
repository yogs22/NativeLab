import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button as ButtonType} from '~/types/component';

const Button: React.FC<ButtonType> = ({style, type, title, onPress}) => {
  return (
    <View style={style}>
      <TouchableOpacity style={styles(type).container} onPress={onPress}>
        <Text style={styles(type).text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = (type?: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: type === 'secondary' ? '#fff' : '#0BCAD4',
      paddingVertical: 10,
      borderRadius: 10,
    },
    text: {
      fontSize: 17,
      fontWeight: '600',
      textAlign: 'center',
      fontFamily: 'Nunito-SemiBold',
      color: type === 'secondary' ? '#000' : '#fff',
    },
  });
