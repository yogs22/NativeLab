import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Gap, Header, Input, Loading, Profile} from '~/components';
import {colors, storeData, getData} from '~/utils';
import {Navigation} from '~/types/component';
import {showMessage} from 'react-native-flash-message';
import axios from 'axios';
import Const from '~/config/const';

export default function UpdateProfile({navigation}: Navigation) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    address: '',
    picture_url: '',
  });

  const [token, setToken] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      setProfile(res);
    });
    getData('token').then(res => {
      setToken(res);
    });
  }, []);

  const [loading, setLoading] = useState(false);

  const changeText = (key: any, value: any) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const update = async () => {
    setLoading(true);
    try {
      await axios
        .put(`${Const.API_URL}/profile/update`, profile, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          storeData('user', response.data.payload);
          setProfile(response.data.payload);
          showMessage({
            message: 'Sukses update profile',
            type: 'success',
          });
          navigation.goBack();
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
      <View style={styles.container}>
        <Header title="Edit Profile" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Profile profile={profile.picture_url} isRemove={true} />
            <Gap height={24} />
            <Input
              style={styles.input}
              label="Full Name"
              value={profile.name}
              onChangeText={(value: any) => changeText('name', value)}
            />
            <Input
              style={styles.input}
              label="Alamat"
              value={profile.address}
              onChangeText={(value: any) => changeText('address', value)}
              numberOfLines={4}
            />
            <Input
              style={styles.input}
              autoCapitalize="none"
              label="Email"
              keyboard="email-address"
              value={profile.email}
              disable
            />
            <Input style={styles.input} label="Password" secure={true} />
            <Button title="Save Profile" onPress={update} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {paddingHorizontal: 40},
  input: {marginBottom: 24},
});
