import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LHospital} from '~/assets';
import {colors, fonts} from '~/utils';
import {ListHospital} from '~/components';
import {DummyHospital1, DummyHospital2, DummyHospital3} from '~/assets';

export default function Hospital() {
  return (
    <View style={styles.container}>
      <ImageBackground source={LHospital} style={styles.background}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jl. Madiun Ngawi Balerejo"
          picture={DummyHospital1}
        />
        <ListHospital
          type="Rumah Sakit Jiwa"
          name="Panti Waluto"
          address="Jl. Condongcatur Sleman"
          picture={DummyHospital2}
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="Jogja Hospital"
          address="Jl. Pahlawan Surabaya"
          picture={DummyHospital3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -20,
    paddingTop: 14,
  },
  background: {height: 240, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
});
