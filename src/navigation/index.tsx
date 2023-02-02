import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  GetStarted,
  Login,
  Register,
  UploadPhoto,
  Doctor,
  Message,
  Hospital,
} from '~/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '~/components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Doctor"
        component={Doctor}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Hospital" component={Hospital} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
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
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
