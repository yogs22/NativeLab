import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {LLogo} from '../../assets';

const Splash = () => {
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
    color: ' #112340',
    marginTop: 20,
    fontFamily: 'Nunito-SemiBold',
  },
});