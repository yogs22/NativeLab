import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'cyan'}} />
      <Text>Hello World</Text>
      <Other />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Other = () => {
  return <Text>Component Lain</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/any'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;
