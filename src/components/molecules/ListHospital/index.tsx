import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '~/utils';
import {ListHospital as ListHospitalType} from '~/types/component';

export default function ListHospital({
  type,
  name,
  address,
  picture,
}: ListHospitalType) {
  return (
    <View style={styles.container}>
      <Image source={picture} style={styles.picture} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  picture: {width: 80, height: 60, borderRadius: 11},
  textWrapper: {marginLeft: 16},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
