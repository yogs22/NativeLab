import {View, Text, StyleSheet, Button} from 'react-native';
import React, {Component, useState} from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const StateDynamic = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Dynamic State</Text>
      <Text>Functional Component (Hooks)</Text>
      <Counter />
      <Counter />
      <Text>Class Component</Text>
      <CounterClass />
      <CounterClass />
    </View>
  );
};

export default StateDynamic;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
