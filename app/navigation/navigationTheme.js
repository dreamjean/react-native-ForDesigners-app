import { DefaultTheme } from '@react-navigation/native';

import { colors } from '../constants';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.blue,
    secondary: colors.grey,
  },
};
