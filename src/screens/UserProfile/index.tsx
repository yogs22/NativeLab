import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Gap, Header, List, Profile} from '~/components';
import {colors, getData} from '~/utils';
import {Navigation} from '~/types/component';
import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import Const from '~/config/const';

export default function UserProfile({navigation}: Navigation) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
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
  });

  const signOut = () => {
    axios
      .post(
        `${Const.API_URL}/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch(error => {
        showMessage({
          message: 'Error!!',
          type: 'danger',
        });
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Header title="User Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={profile.name}
        profile={profile.picture_url}
        desc={profile.email}
      />
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        desc="Available 12 languages"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="rate"
      />
      <List
        name="Sign Out"
        desc="Logout from account"
        type="next"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});
