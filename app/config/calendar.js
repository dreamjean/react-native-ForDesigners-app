import { Dimensions } from 'react-native';

import theme from './theme';

const { width, height } = Dimensions.get('window');

const COURSE_CARD_WIDTH = width - theme.space.m3 * 2;
const COURSE_CARD_HEIGHT = COURSE_CARD_WIDTH * 0.9;
const COURSE_IMAGE_HEIGHT = COURSE_CARD_HEIGHT * 0.78;
const BAR_HEIGHT = 185;
const SETTINGS_SCREEN_HEIGHT = height * 0.9;

export default {
  height,
  width,
  BAR_HEIGHT,
  COURSE_CARD_HEIGHT,
  COURSE_CARD_WIDTH,
  COURSE_IMAGE_HEIGHT,
  SETTINGS_SCREEN_HEIGHT,
};
