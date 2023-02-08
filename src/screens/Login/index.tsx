import {Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {LLogo} from '~/assets';
import {Button, Link, Input} from '~/components';
import {colors, fonts, storeData, useForm} from '~/utils';
import {Navigation} from '~/types/component';
import axios from 'axios';
import Const from '~/config/const';
import {useDispatch} from 'react-redux';
import {showAlert} from '~/utils/showError';

const Login = ({navigation}: Navigation) => {
  const [form, setForm] = useForm({username: '', password: ''});
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .post(`${Const.API_URL}/auth/login`, form)
      .then(response => {
        storeData('token', response.data.payload.token);
        storeData('user', response.data.payload.user);
        navigation.replace('MainApp');
      })
      .catch(error => {
        showAlert(error.response.data.message, 'danger');
      })
      .finally(() => {
        dispatch({type: 'SET_LOADING', value: false});
      });
  };
  return (
    <ScrollView style={styles.container}>
      <LLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input
        style={styles.mb_md}
        keyboard="email-address"
        label="Email Address"
        value={form.username}
        onChangeText={(value: any) => setForm('username', value)}
      />
      <Input
        style={styles.mb_sm}
        secure={true}
        label="Password"
        value={form.password}
        onChangeText={(value: any) => setForm('password', value)}
      />
      <Link
        style={styles.mb_xl}
        text="Forgot Password?"
        size={12}
        align="left"
      />
      <Button style={styles.mb_xl} title="Sign In" onPress={login} />
      <Link
        text="Create New Account"
        onPress={() => navigation.navigate('Register')}
        size={16}
        align="center"
      />
    </ScrollView>
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
