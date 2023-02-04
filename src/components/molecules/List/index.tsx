import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '~/utils';
import {List as ListType} from '~/types/component';
import {
  IconNext,
  IconProfileAccount,
  IconProfileHelp,
  IconProfileLanguage,
  IconProfileRate,
} from '~/assets';

export default function List({
  profile,
  name,
  desc,
  type,
  icon,
  onPress,
}: ListType) {
  const Icon = () => {
    switch (icon) {
      case 'edit-profile':
        return <IconProfileAccount />;
      case 'language':
        return <IconProfileLanguage />;
      case 'rate':
        return <IconProfileRate />;
      case 'help':
        return <IconProfileHelp />;
      default:
        return <IconProfileAccount />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
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
  content: {flex: 1, marginLeft: 16},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  description: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
