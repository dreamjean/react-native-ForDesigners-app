import React from 'react';
import { StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { mix, snapPoint } from 'react-native-redash';
import styled from 'styled-components';

import Image from '../../components/styles/Image';
import Text from '../../components/styles/Text';
import { calendar } from '../../config';

const { width, PROJECT_CARD_WIDTH, PROJECT_CARD_HEIGHT } = calendar;

const snapPoints = [-width, width];

const timingConfig = {
  duration: 240,
  easing: Easing.bezier(0.33, 0.01, 0, 1),
};

const Project = ({ image, title, author, text, position, onSwipe }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = ctx.x + translationX;
      translateY.value = ctx.y + translationY;

      scale.value = interpolate(translateY.value, [-200, 0, 200], [0.7, 1, 0.7], Extrapolate.CLAMP);
    },
    onEnd: ({ velocityX, velocityY }) => {
      if (Math.abs(translateX.value) < 200) {
        translateX.value = withTiming(0);
        translateY.value = withTiming(0);
      } else {
        translateY.value = withSpring(0, { velocity: velocityY });
        const dest = snapPoint(translateX.value, velocityX, snapPoints);
        translateX.value = withSpring(
          dest,
          {
            overshootClamping: true,
            restSpeedThreshold: 100,
            restDisplacementThreshold: 100,
          },
          runOnJS(onSwipe)(),
        );
      }
      scale.value = withTiming(1, timingConfig);
    },
  });

  const stylec = useAnimatedStyle(() => {
    console.log(position.value);
    return {
      zIndex: -position.value,
      transform: [
        { translateX: position.value === 0 ? translateX.value : 0 },
        { translateY: position.value === 0 ? translateY.value : mix(position.value, 0, -44) },
        { scale: position.value === 0 ? scale.value : mix(position.value, 1, 0.9) },
      ],
    };
  });

  return (
    <Wrapper>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={stylec}>
          <Card style={{ elevation: 10 }}>
            <Cover>
              <Image source={image} />
              <Title title1 white>
                {title}
              </Title>
              <Auth caption2 bold upper white opacity={0.7}>
                {author}
              </Auth>
            </Cover>
            <Description caption2 dark>
              {text}
            </Description>
          </Card>
        </Animated.View>
      </PanGestureHandler>
    </Wrapper>
  );
};

const Wrapper = styled.View({
  ...StyleSheet.absoluteFill,
  justifyContent: 'center',
  alignItems: 'center',
});

const Card = styled.View`
  width: ${PROJECT_CARD_WIDTH}px;
  height: ${PROJECT_CARD_HEIGHT}px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m1,
  })}
`;

const Cover = styled.View`
  height: 290px;
`;

const Title = styled(Text)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 300px;
`;

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

export default Project;
