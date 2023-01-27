import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LGetStarted, LLogo} from '../../assets';
import {Button} from '../../components';
import {ImageBackground} from 'react-native';

const GetStarted = () => {
  return (
    <ImageBackground source={LGetStarted} style={styles.page}>
      <View>
        <LLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <View style={styles.margin} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {padding: 40, justifyContent: 'space-between', flex: 1},
  title: {fontSize: 28, fontWeight: '600', color: '#fff', marginTop: 91},
  margin: {height: 16},
});
