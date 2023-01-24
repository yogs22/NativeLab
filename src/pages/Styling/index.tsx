import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Styling = () => {
  console.log('helow');
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'cyan',
          borderWidth: 5,
          marginTop: 20,
          marginLeft: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default Styling;
