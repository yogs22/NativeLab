import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Input as InputType} from '~/types/component';
import {colors} from '~/utils';

const Input: React.FC<InputType> = ({style, keyboard, secure, label}) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboard}
        secureTextEntry={secure}
        style={styles.input}
      />
    </View>
  );
};

Input.defaultProps = {
  secure: false,
  keyboard: 'default',
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: 'Nunito-Reguler',
  },
});
