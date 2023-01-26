import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import Styling from './pages/Styling';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropDynamic from './pages/PropDyanmic';
import StateDynamic from './pages/StateDynamic';
import Communication from './pages/Communication';
import SVGExample from './pages/SVGExample';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <Styling /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropDynamic /> */}
        {/* <StateDynamic /> */}
        {/* <Communication /> */}
        <SVGExample />
      </ScrollView>
    </View>
  );
};

export default App;
