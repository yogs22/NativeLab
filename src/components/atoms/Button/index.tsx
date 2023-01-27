import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button as ButtonType} from '~/types/component';

const Button: React.FC<ButtonType> = ({type, title}) => {
  return (
    <View style={styles(type).container}>
      <Text style={styles(type).text}>{title}</Text>
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
      color: type === 'secondary' ? '#112340' : '#fff',
    },
  });
