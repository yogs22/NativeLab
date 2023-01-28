import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LGetStarted, LLogo} from '../../assets';
import {Button, Gap} from '../../components';
import {ImageBackground} from 'react-native';
import {Navigation} from '~/types/component';

const GetStarted: React.FC<Navigation> = ({navigation}) => {
  return (
    <ImageBackground source={LGetStarted} style={styles.container}>
      <View>
        <LLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {padding: 40, justifyContent: 'space-between', flex: 1},
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
});
