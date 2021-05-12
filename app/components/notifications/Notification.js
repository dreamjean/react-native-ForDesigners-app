import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import styled from 'styled-components';

import Image from '../styles/Image';
import Text from '../styles/Text';
import SwipeableRow from './SwipeableRow';

const Notification = ({ item, opacity, translateY, onRemove }) => {
  const stylez = useAnimatedStyle(() => {
    return {
      width: '100%',
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={stylez}>
      <SwipeableRow {...{ onRemove }}>
        <Container>
          <Header>
            <TitleBox>
              <Image logo source={{ uri: item.logo }} resizeMode="contain" />
              <Text subTitle1 dark>
                {item.title}
              </Text>
            </TitleBox>
            <DateBox>
              <Text tiny>{item.date}</Text>
            </DateBox>
          </Header>
          <Text body1 dark marginTop={12}>
            {item.text}
          </Text>
        </Container>
      </SwipeableRow>
    </Animated.View>
  );
};

const Container = styled.View`
  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m1,
    padding: space.l1,
    marginTop: space.l1,
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
    paddingVertical: space.s1,
    paddingHorizontal: space.s2,
  })}
`;

export default Notification;
