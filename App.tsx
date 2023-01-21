import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingComponent from './StylingComponent';
import FlexBoxComponent from './FlexBoxComponent';
import PositionComponent from './PositionComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent />
        <FlexBoxComponent /> */}
        <PositionComponent />
      </ScrollView>
    </View>
  );
};

export default App;
