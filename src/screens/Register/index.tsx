import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Header, Input, Button, Loading} from '~/components';
import {colors, useForm} from '~/utils';
import {Navigation} from '~/types/component';
import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import Const from '~/config/const';

const Register = ({navigation}: Navigation) => {
  const [form, setForm] = useForm({
    name: '',
    phone_number: '',
    email: '',
    password: '',
    password_confirmation: '',
    city_id: 3404,
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    try {
      axios
        .post(`${Const.API_URL}/auth/register`, form)
        .then(response => {
          setForm('reset');
          console.log(response);
          navigation.navigate('UploadPhoto');
        })
        .catch(error => {
          showMessage({
            message: 'Error!!',
            type: 'danger',
          });
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Input
            style={styles.mb24}
            label="Full Name"
            value={form.name}
            onChangeText={(value: any) => setForm('name', value)}
          />
          <Input
            style={styles.mb24}
            label="Email"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(value: any) => setForm('email', value)}
          />
          <Input
            style={styles.mb24}
            label="No Handphone"
            keyboard="numeric"
            value={form.phone_number}
            onChangeText={(value: any) => setForm('phone_number', value)}
          />
          <Input
            style={styles.mb40}
            label="Password"
            secure={true}
            value={form.password}
            onChangeText={(value: any) => setForm('password', value)}
          />
          <Input
            style={styles.mb40}
            label="Ulangi Password"
            secure={true}
            value={form.password_confirmation}
            onChangeText={(value: any) =>
              setForm('password_confirmation', value)
            }
          />
          <Button title="Continue" onPress={onContinue} />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
  mb24: {marginBottom: 24},
  mb40: {marginBottom: 40},
});
