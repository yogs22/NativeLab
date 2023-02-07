import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fonts, getData} from '~/utils';

export default function HomeProfile({onPress}: any) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    picture_url: '',
  });
  useEffect(() => {
    getData('user').then(res => {
      setProfile(res);
    });
  });
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: profile.picture_url,
        }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.profession}>{profile.email}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
