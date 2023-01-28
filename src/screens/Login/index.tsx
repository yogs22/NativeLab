import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {LLogo} from '~/assets';
import Input from '~/components/atoms/Input';
import Link from '~/components/atoms/Link';
import {Button, Gap} from '~/components';

const Login = () => {
  return (
    <View style={styles.container}>
      <LLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link text="Forgot Password?" size={12} align="left" />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link text="Create New Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#000',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 200,
  },
});
