import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingComponent from './StylingComponent';
import FlexBoxComponent from './FlexBoxComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        <FlexBoxComponent />
      </ScrollView>
    </View>
  );
};

export default App;
