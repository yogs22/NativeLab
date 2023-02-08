import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {LLogo} from '~/assets';
import {Navigation} from '~/types/component';
import {colors, fonts, getData} from '~/utils';
import axios from 'axios';
import Const from '~/config/const';

const Splash: React.FC<Navigation> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(async res => {
        if (res) {
          await axios
            .get(`${Const.API_URL}/auth/me`, {
              headers: {
                Authorization: `Bearer ${res}`,
              },
            })
            .then(() => {
              navigation.replace('MainApp');
            })
            .catch(() => {
              navigation.replace('GetStarted');
            });
        } else {
          navigation.replace('GetStarted');
        }
      });
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LLogo />
      <Text style={styles.text}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 20,
    fontFamily: fonts.primary[600],
  },
});
