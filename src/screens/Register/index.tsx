import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Header, Input, Button} from '~/components';
import {colors} from '~/utils';
import {Navigation} from '~/types/component';

const Register = ({navigation}: Navigation) => {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input style={styles.mb24} label="Full Name" />
        <Input style={styles.mb24} label="Pekerjaan" />
        <Input style={styles.mb24} label="Email" />
        <Input style={styles.mb40} label="Password" />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
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
