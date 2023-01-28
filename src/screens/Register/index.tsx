import {View, Text} from 'react-native';
import React from 'react';
import {LLogo} from '~/assets';
import Input from '~/components/atoms/Input';

const Register = () => {
  return (
    <View>
      <LLogo />
      <Text>Masuk dan mulai berkonsultasi</Text>
      <Input />
    </View>
  );
};

export default Register;
