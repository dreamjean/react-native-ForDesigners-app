import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, StatusBar } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import styled from 'styled-components';

import Image from '../../components/styles/Image';
import Text from '../../components/styles/Text';
import { calendar, colors } from '../../config';
import IconButton from '../IconButton';

const { width, height, PROJECT_CARD_WIDTH, PROJECT_CARD_HEIGHT } = calendar;

const ProjectCard = ({ image, title, author, text, setCardOpened }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const cardWidth = useSharedValue(PROJECT_CARD_WIDTH);
  const cardHeight = useSharedValue(PROJECT_CARD_HEIGHT);
  const borderRadius = useSharedValue(14);
  const titleTop = useSharedValue(20);
  const opacity = useSharedValue(0);
  const textHeight = useSharedValue(130);

  const openCard = () => {
    cardWidth.value = withSpring(width);
    cardHeight.value = withSpring(height - tabBarHeight);
    borderRadius.value = withTiming(0);
    titleTop.value = withSpring(40);
    opacity.value = withTiming(1);
    textHeight.value = withSpring(1000);

    StatusBar.setHidden(true);
    setCardOpened(true);
  };

  const closeCard = () => {
    cardWidth.value = withSpring(PROJECT_CARD_WIDTH);
    cardHeight.value = withSpring(PROJECT_CARD_HEIGHT);
    borderRadius.value = withTiming(14);
    titleTop.value = withSpring(20);
    opacity.value = withTiming(0);
    textHeight.value = withSpring(130);

    StatusBar.setHidden(false);
    setCardOpened(false);
  };

  const stylec = useAnimatedStyle(() => {
    return {
      width: cardWidth.value,
      height: cardHeight.value,
      borderRadius: borderRadius.value,
    };
  });

  const stylet = useAnimatedStyle(() => {
    return {
      top: titleTop.value,
    };
  });

  const stylei = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const stylet2 = useAnimatedStyle(() => {
    return {
      height: textHeight.value,
    };
  });

  const styleg = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top: 330,
      width: '100%',
      height: textHeight.value,
    };
  });

  return (
    <Pressable onPress={openCard} onLongPress={() => setCardOpened(false)}>
      <AnimatedContainer style={stylec}>
        <Cover>
          <Image source={image} />
          <AnimatedTitle title1 white style={stylet}>
            {title}
          </AnimatedTitle>
          <Auth caption2 bold upper white opacity={0.7}>
            {author}
          </Auth>
        </Cover>
        <AnimatedText caption2 dark style={stylet2}>
          {text}
        </AnimatedText>
        <AnimatedLinearGradient colors={[colors.transparent, colors.white]} style={styleg} />
        <Animated.View style={[{ position: 'absolute', top: 20, right: 20 }, stylei]}>
          <IconButton iconName="close" bgColor={colors.white} size={32} onPress={closeCard} />
        </Animated.View>
      </AnimatedContainer>
    </Pressable>
  );
};

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const Container = styled.View`
  overflow: hidden;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 290px;
  width: 100%;
`;

const Title = styled(Text)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 300px;
`;

const AnimatedTitle = Animated.createAnimatedComponent(Title);

const Auth = styled(Text)`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const Description = styled(Text)`
  line-height: 18px;

  ${({ theme: { space } }) => ({
    margin: space.m2,
  })}
`;

const AnimatedText = Animated.createAnimatedComponent(Description);

export default ProjectCard;
