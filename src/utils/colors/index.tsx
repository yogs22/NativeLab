const mainColors: any = {
  green1: '#0bcad4',
  green2: '#edfcfd',
  dark1: '#112340',
  dark2: '#495a75',
  grey1: '#7d8797',
  grey2: '#e9e9e9',
  grey3: '#edeef0',
  grey4: '#b1b7c2',
  blue1: '#0066cb',
  black1: '#000000',
  black2: 'rgba(0, 0, 0, 0.15)',
};

export const colors: any = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  white: 'white',
  black: mainColors.black1,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
    disable: {
      backgrond: mainColors.grey3,
      text: mainColors.grey4,
    },
  },
  border: mainColors.grey2,
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
};
