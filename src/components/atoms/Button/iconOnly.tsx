import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconOnly} from '~/types/component';
import {IconBack} from '~/assets';

const iconOnly = ({onPress, icon}: IconOnly) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBack />;
    }
    if (icon === 'back-light') {
      return <IconBack />;
    }

    return <IconBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default iconOnly;

const styles = StyleSheet.create({});
