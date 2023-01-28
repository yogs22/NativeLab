export interface Button {
  type?: string;
  title: string;
  onPress?: () => void;
}

export interface Gap {
  width?: number;
  height?: number;
}

export interface Input {
  label: string;
}

export interface Link {
  text: string;
  size: number;
  align: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
}

export interface Navigation {
  navigation: {
    replace?: any;
    navigate?: any;
  };
}
