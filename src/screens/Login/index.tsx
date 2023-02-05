import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {LLogo} from '~/assets';
import {Button, Link, Input} from '~/components';
import {colors, fonts} from '~/utils';
import {Navigation} from '~/types/component';

const Login = ({navigation}: Navigation) => {
  return (
    <View style={styles.container}>
      <LLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input
        style={styles.mb_md}
        keyboard="email-address"
        label="Email Address"
      />
      <Input style={styles.mb_sm} secure={true} label="Password" />
      <Link
        style={styles.mb_xl}
        text="Forgot Password?"
        size={12}
        align="left"
      />
      <Button
        style={styles.mb_xl}
        title="Sign In"
        onPress={() => navigation.replace('MainApp')}
      />
      <Link
        text="Create New Account"
        onPress={() => navigation.navigate('Register')}
        size={16}
        align="center"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 200,
  },
  mb_md: {
    marginBottom: 24,
  },
  mb_sm: {
    marginBottom: 10,
  },
  mb_xl: {
    marginBottom: 30,
  },
});
