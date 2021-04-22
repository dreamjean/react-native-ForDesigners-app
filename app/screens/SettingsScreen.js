import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components';

import { Content, IconButton, ListItem } from '../components';
import Text from '../components/styles/Text';
import { colors } from '../config';
import { settingItems } from '../data';

const SettingsScreen = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <TitleBox>
          <Text title2 white>
            Rokia
          </Text>
          <Text white marginVertical={8} opacity={0.65}>
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
          <IconButton
            size={48}
            iconName="close"
            bgColor={colors.white}
            onPress={() => navigation.goBack()}
          />
        </Pressable>
      </Content>
      <Wrapper>
        {settingItems.map((item) => (
          <ListItem key={item.title} title={item.title} icon={item.icon} subTitle={item.text} />
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const TitleBox = styled.View`
  align-items: center;
  justify-content: center;

  ${({ theme: { space } }) => ({
    paddingTop: space.xxl,
    paddingBottom: space.xl,
  })}
`;

const Wrapper = styled.View`
  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.lightGrey,
    padding: space.xxl,
    marginTop: space.m2,
  })}
`;

export default SettingsScreen;
