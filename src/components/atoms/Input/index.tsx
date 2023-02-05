import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Input as InputType} from '~/types/component';
import {colors, fonts} from '~/utils';

const Input = ({
  style,
  value,
  onChangeText,
  keyboard,
  secure,
  label,
  autoCapitalize,
}: InputType) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View style={style}>
      <Text style={styles().label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboard}
        secureTextEntry={secure}
        style={styles(border).input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

Input.defaultProps = {
  secure: false,
  keyboard: 'default',
};

export default Input;

const styles = (border?: string) =>
  StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: border,
      borderRadius: 10,
      padding: 12,
    },
    label: {
      fontSize: 16,
      color: colors.text.secondary,
      marginBottom: 6,
      fontFamily: fonts.primary[400],
    },
  });
