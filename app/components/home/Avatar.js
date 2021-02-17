import React, { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components';

import usersApi from '../../api/users';
import Notifications from '../../assets/icons/icon-notifications.svg';
import Image from '../styles/Image';
import Text from '../styles/Text';
import SvgIconButton from '../SvgIconButton';

const Avatar = ({ name, onAvatarPress, onIconPress }) => {
  const [photo] = useState('https://share.getcloudapp.com/geu447AY/download/avatar-default.jpg');

  useEffect(() => {
    loadPhoto();
  });

  const loadPhoto = async () => {
    const result = await usersApi.getUser();
    console.log(result);
    // if (result.ok) setPhoto(result.data.photo);
  };

  return (
    <Container>
      <Pressable
        onPress={onAvatarPress}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <Image avatar2 source={{ uri: photo }} />
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

const TitleBar = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    marginLeft: space.m2,
  })}
`;

export default Avatar;
