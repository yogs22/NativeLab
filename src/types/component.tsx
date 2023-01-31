import {KeyboardTypeOptions, StyleProp, ViewStyle} from 'react-native';

export interface Button {
  style?: StyleProp<ViewStyle>;
  type?: string;
  title: string;
  onPress?: () => void;
}

export type AlignStyle =
  | 'auto'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | undefined;

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
  size: number;
  align: AlignStyle;
}

export interface Link extends LinkStyle {
  style?: StyleProp<ViewStyle>;
  text: string;
}

export interface Navigation {
  navigation: {
    replace?: any;
    navigate?: any;
  };
}
