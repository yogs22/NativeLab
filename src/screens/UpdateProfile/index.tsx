import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input, Profile} from '~/components';
import {colors} from '~/utils';
import {Navigation} from '~/types/component';

export default function UpdateProfile({navigation}: Navigation) {
  return (
    <View style={styles.container}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove={true} />
          <Gap height={24} />
          <Input style={styles.input} label="Full Name" />
          <Input style={styles.input} label="Pekerjaan" />
          <Input
            style={styles.input}
            autoCapitalize="none"
            label="Email"
            keyboard="email-address"
          />
          <Input style={styles.input} label="Password" secure={true} />
          <Button title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {paddingHorizontal: 40},
  input: {marginBottom: 24},
});
