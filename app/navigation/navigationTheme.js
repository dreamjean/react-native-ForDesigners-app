import { DefaultTheme } from '@react-navigation/native';

import { colors } from '../config';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.blue,
    background: colors.lightGrey,
  },
};
