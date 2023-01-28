import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {LLogo} from '~/assets';
import {Navigation} from '~/types/component';

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
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginTop: 20,
    fontFamily: 'Nunito-SemiBold',
  },
});
