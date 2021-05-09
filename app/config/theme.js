import { Dimensions, Platform } from 'react-native';

import colors from './colors';

const { width, height } = Dimensions.get('window');

export const isIos = Platform.OS === 'ios';

const getFont = (n) => (isIos ? fonts.ios[n] : fonts.android[n]);

const fonts = {
  ios: ['Proxima-Nova-Bold', 'Proxima-Nova-Sbold', 'Proxima-Nova-Reg'],
  android: ['Montserrat-Bold', 'Montserrat-SemiBold', 'Montserrat-Regular'],
};

export default {
  colors,
  size: {
    s1: 13,
    s2: 14,
    m1: 15,
    m2: 16,
    l1: 17,
    l2: 18,
    title1: 20,
    title2: 22,
    heading: 50,
  },
  space: {
    n: 0,
    s1: 4,
    s2: 8,
    s3: 10,
    m1: 12,
    m2: 16,
    m3: 18,
    l1: 20,
    l2: 24,
    l3: 32,
    xl: 40,
    xxl: 50,
  },
  radii: {
    n: 0,
    s1: 4,
    s2: 10,
    m1: 14,
    m2: 24,
    l: 35,
    l2: 40,
    xxl: 999,
  },

  getFont,
  width,
  height,
};
