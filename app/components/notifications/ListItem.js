import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import styled from 'styled-components';

import Image from '../styles/Image';
import Text from '../styles/Text';
import SwipeableRow from './SwipeableRow';

const ListItem = ({ title, logo, date, text, opacity, translateY }) => {
  const stylez = useAnimatedStyle(() => {
    return {
      width: '100%',
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <AnimatedItem style={stylez}>
      <SwipeableRow>
        <Container>
          <Header>
            <TitleBox>
              <Image logo source={{ uri: logo }} resizeMode="contain" />
              <Text subTitle1 dark>
                {title}
              </Text>
            </TitleBox>
            <DateBox>
              <Text tiny>{date}</Text>
            </DateBox>
          </Header>
          <Text body1 dark marginTop={20}>
            {text}
          </Text>
        </Container>
      </SwipeableRow>
    </AnimatedItem>
  );
};

const Item = styled.View`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m1,
    marginVertical: space.m1,
  })}
`;

const AnimatedItem = Animated.createAnimatedComponent(Item);

const Container = styled.View`
  width: 100%;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m1,
    padding: space.l1,
  })}
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DateBox = styled.View`
  align-items: center;
  justify-content: center;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.blue,
    borderRadius: radii.m1,
    padding: space.s2,
  })}
`;

export default ListItem;
