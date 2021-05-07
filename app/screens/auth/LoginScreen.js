import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components';

import Button from '../../components/Button';
import Image from '../../components/styles/Image';
import Text from '../../components/styles/Text';
import TextInput from '../../components/TextInput';
import { calendar, images } from '../../config';

const { height } = calendar;

const LoginScreen = () => {
  const [iconEmail, setIconEmail] = useState(require('../../assets/icon-email.png'));
  const [iconPassword, setIconPassword] = useState(require('../../assets/icon-password.png'));

  const focusEmail = () => {
    setIconEmail(require('../../assets/icon-email-animated.gif'));
    setIconPassword(require('../../assets/icon-password.png'));
  };

  const focusPassword = () => {
    setIconEmail(require('../../assets/icon-email.png'));
    setIconPassword(require('../../assets/icon-password-animated.gif'));
  };

  return (
    <ImageBackground source={images[29]}>
      <BlurView intensity={80} style={StyleSheet.absoluteFillObject} />
      <Container style={StyleSheet.absoluteFill}>
        <Cover>
          <Image logo2 style={{ marginTop: 50 }} source={images[28]} />
          <Title caption1>Start learning Sccess pro content.</Title>
          <Wrapper>
            <TextInput icon={iconEmail} onFocus={focusEmail} />
            <TextInput icon={iconPassword} onFocus={focusPassword} />
            <Button title="Log in" />
          </Wrapper>
        </Cover>
      </Container>
    </ImageBackground>
  );
};

const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: ${height}px;
`;

const Container = styled.View`
  align-items: center;
  justify-content: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.lightBlue2,
  })}
`;

const Cover = styled.View`
  width: 335px;
  height: 370px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.s2,
  })}
`;

const Title = styled(Text)`
  width: 180px;
  text-align: center;
  text-transform: uppercase;

  ${({ theme: { space } }) => ({
    marginTop: space.l1,
  })}
`;

const Wrapper = styled.View`
  ${({ theme: { space } }) => ({
    margin: space.s3,
  })}
`;

export default LoginScreen;
