export interface Button {
  type?: string;
  title: string;
  onPress?: () => void;
}

export interface Gap {
  width?: number;
  height?: number;
}

export interface Navigation {
  navigation: {
    replace?: any;
    navigate?: any;
  };
}
