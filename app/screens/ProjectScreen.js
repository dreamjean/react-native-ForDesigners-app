import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import styled from 'styled-components';

import { ProjectCard } from '../components';
import { colors } from '../config';
import projects from '../data/projects';

const timingConfig = {
  duration: 240,
  easing: Easing.bezier(0.33, 0.01, 0, 1),
};

const getNextIndex = (index) => {
  let nextIndex = index + 1;
  if (nextIndex > projects.length - 1) return 0;

  return nextIndex;
};

const ProjectScreen = () => {
  const [cardOpened, setCardOpened] = useState(false);
  const [index, setIndex] = useState(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const imgOpacity = useSharedValue(1);
  const secondScale = useSharedValue(0.9);
  const secondTransY = useSharedValue(38);
  const thirdScale = useSharedValue(0.8);
  const thirdTransY = useSharedValue(0);
  const opacity = useSharedValue(0);

  const resetNextCard = () => {
    setIndex(getNextIndex(index));

    translateX.value = 0;
    translateY.value = 0;
    scale.value = withDelay(100, withTiming(1, timingConfig));

    secondScale.value = 0.9;
    secondTransY.value = 38;

    thirdScale.value = 0.8;
    thirdTransY.value = 0;
  };

  const handlePanGesture = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
    },

    onActive: ({ translationX, translationY }, { x, y }) => {
      translateX.value = x + translationX;
      translateY.value = y + translationY;

      scale.value = interpolate(
        translateY.value,
        [-200, 0, 200],
        [0.65, 1, 0.65],
        Extrapolate.CLAMP,
      );

      imgOpacity.value = interpolate(
        translateY.value,
        [-100, 0, 100],
        [0.6, 1, 0.6],
        Extrapolate.CLAMP,
      );

      opacity.value = withTiming(1);
      secondScale.value = withTiming(1);
      secondTransY.value = withTiming(0);

      thirdScale.value = 0.9;
      thirdTransY.value = 38;
    },
    onEnd: ({ velocityX, velocityY }) => {
      opacity.value = withTiming(0);

      if (translateY.value < 200) {
        translateX.value = 0;
        translateY.value = 0;
        scale.value = withTiming(1, timingConfig);

        secondScale.value = withSpring(0.9);
        secondTransY.value = withSpring(38);

        thirdScale.value = withSpring(0.8);
        thirdTransY.value = withSpring(0);
      } else {
        translateX.value = withSpring(0, {
          velocity: velocityX,
        });
        translateY.value = withDecay(
          {
            velocity: velocityY,
            clamp: [200, 1000],
          },
          runOnJS(resetNextCard)(),
        );
        scale.value = withTiming(0, { duration: 300 });
        imgOpacity.value = withTiming(0, { duration: 300 });
      }
      imgOpacity.value = withTiming(1, timingConfig);
    },
  });

  const stylem = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const card1Style = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      opacity: imgOpacity.value,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  const card2Style = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      zIndex: -1,
      transform: [{ translateY: secondTransY.value }, { scale: secondScale.value }],
    };
  });

  const card3Style = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      zIndex: -2,
      transform: [{ translateY: thirdTransY.value }, { scale: thirdScale.value }],
    };
  });

  return (
    <Container>
      <Animated.View style={[styles.mask, stylem]} />
      <PanGestureHandler enabled={!cardOpened} onGestureEvent={handlePanGesture}>
        <Animated.View style={styles.wrapper}>
          <Animated.View style={[styles.shadow, card1Style]}>
            <ProjectCard
              title={projects[index].title}
              image={projects[index].image}
              author={projects[index].author}
              text={projects[index].text}
              {...{ cardOpened, setCardOpened }}
            />
          </Animated.View>
          <Animated.View style={[styles.shadow, card2Style]}>
            <ProjectCard
              title={projects[getNextIndex(index)].title}
              image={projects[getNextIndex(index)].image}
              author={projects[getNextIndex(index)].author}
              text={projects[getNextIndex(index)].text}
            />
          </Animated.View>
          <Animated.View style={[styles.shadow, card3Style]}>
            <ProjectCard
              title={projects[getNextIndex(index + 1)].title}
              image={projects[getNextIndex(index + 1)].image}
              author={projects[getNextIndex(index + 1)].author}
              text={projects[getNextIndex(index + 1)].text}
            />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
      <StatusBar barStyle="dark-content" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 10,
      height: 15,
    },
    shadowRadius: 8,
    elevation: 15,
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -3,
    backgroundColor: colors.medium,
  },
});

export default ProjectScreen;
