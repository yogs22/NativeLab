import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'cyan'}} />
      <Text>Hello World</Text>
      <Other />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
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

class BoxGreen extends Component {
  render() {
    return (
      <View>
        <Text style={{color: 'blue', fontSize: 24}}>Ini Component</Text>
        <Image
          source={{uri: 'https://placeimg.com/100/100/any'}}
          style={{width: 100, height: 100}}
        />
      </View>
    );
  }
}

export default SampleComponent;
