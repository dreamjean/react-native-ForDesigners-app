import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components';

import Notifications from '../../assets/icons/icon-notifications.svg';
import { images } from '../../constants';
import Image from '../styles/Image';
import Text from '../styles/Text';
import SvgIconButton from '../SvgIconButton';

const Avatar = ({ avatar, name, onAvatarPress, onIconPress }) => {
  return (
    <Container>
      <Pressable
        onPress={onAvatarPress}
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
      <SvgIconButton SvgName={Notifications} width={24} height={24} onPress={onIconPress} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.m3,
    paddingTop: space.l2,
    paddingBottom: space.s3,
  })}
`;

const Box = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
`;

const TitleBar = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    marginLeft: space.s2,
  })}
`;

export default Avatar;
