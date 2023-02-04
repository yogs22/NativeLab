import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconDoctor,
  IconDoctorActive,
  IconHospital,
  IconHospitalActive,
  IconMessage,
  IconMessageActive,
} from '~/assets';
import {colors, fonts} from '~/utils';

export default function TabItem({title, active, onPress, onLongPress}: any) {
  const Icon = () => {
    switch (title) {
      case 'Doctor':
        return active ? <IconDoctorActive /> : <IconDoctor />;

      case 'Message':
        return active ? <IconMessageActive /> : <IconMessage />;

      case 'Hospital':
        return active ? <IconHospitalActive /> : <IconHospital />;

      default:
        return <IconDoctor />;
    }
  };
  return (
    <TouchableOpacity
      style={styles().container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles(active).text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = (active?: string) =>
  StyleSheet.create({
    container: {alignItems: 'center'},
    text: {
      fontSize: 10,
      color: active ? colors.text.menuActive : colors.text.menuInactive,
      fontFamily: fonts.primary[600],
      marginTop: 4,
    },
  });
