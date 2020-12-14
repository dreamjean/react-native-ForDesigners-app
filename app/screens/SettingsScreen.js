import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components';

import { Content, RoundIcon } from '../components';
import Text from '../components/styles/Text';

const SettingsScreen = ({ navigation }) => {
  return (
    <Content>
      <TitleBox>
        <Text title2 white>
          Rokia
        </Text>
        <Text white marginVertical={8} opacity={0.8}>
          rokia@demo.com
        </Text>
      </TitleBox>
      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
          alignSelf: 'center',
        })}
      >
        <RoundIcon size={48} name="close" />
      </Pressable>
    </Content>
  );
};

const TitleBox = styled.View`
  align-items: center;
  justify-content: center;

  ${({ theme: { space } }) => ({
    paddingTop: space.xxl,
    paddingBottom: space.xl,
  })}
`;

export default SettingsScreen;
