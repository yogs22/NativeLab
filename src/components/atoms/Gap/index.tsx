import {View} from 'react-native';
import React from 'react';
import {Gap as GapType} from '~/types/component';

const Gap: React.FC<GapType> = ({height, width}) => {
  return <View style={{height: height, width: width}} />;
};

export default Gap;
