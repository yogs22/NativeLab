import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import mlimage from './pp-ml.jpg';

const App = () => {
  return <StylingComponent />;
};

const StylingComponent = () => {
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
      <View style={{padding: 12, backgroundColor: '#f2f2f2', width: 212}}>
        <Image
          source={mlimage}
          style={{
            width: 188,
            height: 107,
            borderRadius: 8,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 14,
          }}>
          Diamond Mobile Legends
        </Text>
        <Text style={{color: 'orange', marginTop: 10, marginBottom: 10}}>
          Rp 100.000
        </Text>
        <Text>Moonton</Text>
        <View
          style={{
            backgroundColor: 'crimson',
            padding: 10,
            borderRadius: 50,
            marginVertical: 10,
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Beli Sekarang</Text>
        </View>
      </View>
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

export default App;
