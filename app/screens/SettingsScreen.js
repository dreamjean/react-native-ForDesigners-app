import React from 'react';
import styled from 'styled-components';

import { Content, IconButton, ListItem } from '../components';
import Text from '../components/styles/Text';
import { calendar, colors } from '../config';
import { settings } from '../data';

const { width } = calendar;
let cardWidth = width > 500 ? 500 : width;

const SettingsScreen = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <TitleBox>
          <Text title2 white>
            Rokia
          </Text>
          <Text white marginTop={8} opacity={0.65}>
            rokia@demo.com
          </Text>
        </TitleBox>
        <IconButton
          style={{ alignSelf: 'center', marginTop: 8 }}
          size={48}
          iconName="close"
          bgColor={colors.white}
          onPress={() => navigation.goBack()}
        />
      </Content>
      <Wrapper>
        {settings.map((item) => (
          <ListItem key={item.title} title={item.title} icon={item.icon} subTitle={item.text} />
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.View`
  width: ${cardWidth}px;
  align-self: center;
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
