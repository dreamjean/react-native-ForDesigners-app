import { Dimensions } from 'react-native';

import theme from './theme';

const { width, height } = Dimensions.get('window');

const COURSE_CARD_WIDTH = width - theme.space.m3 * 2;
const COURSE_CARD_HEIGHT = COURSE_CARD_WIDTH * 0.9;

export default {
  height,
  width,
  COURSE_CARD_HEIGHT,
  COURSE_CARD_WIDTH,
};
