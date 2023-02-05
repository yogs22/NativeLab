import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Header, Input, Button} from '~/components';
import {colors, useForm} from '~/utils';
import {Navigation} from '~/types/component';

const Register = ({navigation}: Navigation) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
  };
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Input
          style={styles.mb24}
          label="Full Name"
          value={form.fullName}
          onChangeText={(value: any) => setForm('fullName', value)}
        />
        <Input
          style={styles.mb24}
          label="Pekerjaan"
          value={form.profession}
          onChangeText={(value: any) => setForm('profession', value)}
        />
        <Input
          style={styles.mb24}
          label="Email"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(value: any) => setForm('email', value)}
        />
        <Input
          style={styles.mb40}
          label="Password"
          secure={true}
          value={form.password}
          onChangeText={(value: any) => setForm('password', value)}
        />
        <Button title="Continue" onPress={onContinue} />
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
  mb24: {marginBottom: 24},
  mb40: {marginBottom: 40},
});
