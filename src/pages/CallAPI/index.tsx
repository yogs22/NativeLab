import Axios from 'axios';
import React from 'react';
import {View, Text, Button} from 'react-native';

const CallAPI = () => {
  const getData = () => {
    Axios.get('https://reqres.in/api/users/3')
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <View>
      <Text>Call API Axios</Text>
      <Button title="Get Data" onPress={getData} />
    </View>
  );
};

export default CallAPI;
