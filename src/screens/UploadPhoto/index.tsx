import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import {Button, Header, Link} from '~/components';
import {Navigation} from '~/types/component';
import {IconAddPhoto, LNullPhoto} from '~/assets';
import {colors, fonts} from '~/utils';

export default function UploadPhoto({navigation}: Navigation) {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={LNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shania Twain</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button style={styles.mb30} title="Upload and Continue" />
          <Link
            style={styles.mb40}
            size={16}
            align="center"
            text="Skip for this"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {paddingHorizontal: 40, flex: 1, justifyContent: 'space-between'},
  avatar: {width: 110, height: 110},
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  profile: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: colors.text.secondari,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    marginTop: 4,
  },
  mb30: {marginBottom: 30},
  mb40: {marginBottom: 40},
});
