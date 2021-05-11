import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const COURSE_CARD_HEIGHT = 340;
const COURSE_IMAGE_HEIGHT = COURSE_CARD_HEIGHT * 0.76;
const BAR_HEIGHT = 185;
const SETTINGS_SCREEN_HEIGHT = height * 0.9;
const SECTION_IMAGE_HEIGHT = height * 0.45;
const PROJECT_CARD_WIDTH = 315;
const PROJECT_CARD_HEIGHT = 460;
const AUTH_CARD_WIDTH = width * 0.8;
const LEFT_ACTION_WIDTH = 130;

export default {
  height,
  width,
  AUTH_CARD_WIDTH,
  BAR_HEIGHT,
  COURSE_CARD_HEIGHT,
  COURSE_IMAGE_HEIGHT,
  LEFT_ACTION_WIDTH,
  PROJECT_CARD_WIDTH,
  PROJECT_CARD_HEIGHT,
  SETTINGS_SCREEN_HEIGHT,
  SECTION_IMAGE_HEIGHT,
};
