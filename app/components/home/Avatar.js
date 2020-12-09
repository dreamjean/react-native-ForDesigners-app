import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components';

import { images } from '../../constants';
import Image from '../styles/Image';
import Text from '../styles/Text';

const Avatar = ({ avatar, name, onInfoChange }) => {
  return (
    <Container>
      <Pressable
        onPress={onInfoChange}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <Box>
          {avatar && <Image source={avatar} />}
          {!avatar && <Image source={images[0]} />}
        </Box>
      </Pressable>
      <TitleBar>
        <Text body2>Welcome back,</Text>
        <Text subTitle2 dark>
          {name}
        </Text>
      </TitleBar>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.m1,
    marginBottom: space.m1,
  })}
`;

const Box = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  overflow: hidden;
`;

const TitleBar = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    marginLeft: space.s2,
  })}
`;

export default Avatar;
