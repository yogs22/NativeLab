import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import IllustrationMyApp from '../../assets/image/react.svg';

const SVGExample = () => {
  return (
    <View style={styles.container}>
      <Text>SVGExample</Text>
      <IllustrationMyApp width={244} height={125} />
    </View>
  );
};

export default SVGExample;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
  },
});
