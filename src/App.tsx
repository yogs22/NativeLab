import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';
import FlashMessage from 'react-native-flash-message';
import {Loading} from './components';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import {GlobalState} from '~/types/component';

const AppComponent = () => {
  const stateGlobal = useSelector<GlobalState, GlobalState>(state => state);
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
};

export default App;
