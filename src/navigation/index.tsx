import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, GetStarted, Login, Register, UploadPhoto} from '~/screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
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
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
