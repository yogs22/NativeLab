import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, GetStarted} from '~/screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
