import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LDokUmum} from '~/assets';
import {colors, fonts} from '~/utils';

export default function DoctorCategory() {
  return (
    <View style={styles.container}>
      <LDokUmum style={styles.icon} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>Dokter umum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  icon: {marginBottom: 28},
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
