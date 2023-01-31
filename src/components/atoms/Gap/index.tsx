import {View} from 'react-native';
import React from 'react';
import {Gap as GapType} from '~/types/component';

const Gap = ({height, width}: GapType) => {
  return <View style={{height: height, width: width}} />;
};

export default Gap;
