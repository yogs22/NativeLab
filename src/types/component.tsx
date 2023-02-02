import {
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

export type AlignStyle =
  | 'auto'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | undefined;

export type IconBackType = 'back-dark' | 'back-light';

export enum KeyboardType {
  'default',
  'email-address',
  'numeric',
  'phone-pad',
  'ascii-capable',
  'numbers-and-punctuation',
  'url',
  'number-pad',
  'name-phone-pad',
  'decimal-pad',
  'twitter',
  'web-search',
  'visible-password',
}

export interface Button {
  style?: StyleProp<ViewStyle>;
  type?: string;
  title?: string;
  icon?: IconBackType;
  onPress?: () => void;
}

export interface Gap {
  width?: number;
  height?: number;
}

export interface Input {
  style?: StyleProp<ViewStyle>;
  keyboard?: KeyboardTypeOptions;
  secure?: boolean;
  label: string;
}

export interface LinkStyle {
  size?: number;
  align?: AlignStyle;
}

export interface Link extends LinkStyle {
  style?: StyleProp<ViewStyle>;
  text: string;
}

export interface Navigation {
  navigation: {
    replace?: any;
    navigate?: any;
    goBack?: any;
  };
}

export interface Header {
  title: string;
  onPress: () => void;
}

export interface IconOnly {
  onPress?: () => void;
  icon?: IconBackType;
}

export interface ListHospital {
  type: string;
  name: string;
  address: string;
  picture: ImageSourcePropType;
}

export interface ListDoctor {
  profile: ImageSourcePropType;
  name: string;
  desc: string;
}
