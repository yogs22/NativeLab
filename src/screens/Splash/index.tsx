import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {LLogo} from '~/assets';
import {Navigation} from '~/types/component';
import {colors, fonts} from '~/utils';

const Splash: React.FC<Navigation> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
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
