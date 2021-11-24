import React from "react";
import styled from "styled-components";

import useAuth from "../auth/useAuth";
import { Content, IconButton, SettingsItem } from "../components";
import Text from "../components/styles/Text";
import { colors, constants } from "../config";
import { settings } from "../data";

const { width } = constants;
let cardWidth = width > 500 ? 500 : width;

const SettingsScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handlePress = (title) => {
    if (title === "Log out") return logout();
  };

  return (
    <Container>
      <Content>
        <TitleBox>
          <Text title2 white>
            {user.name}
          </Text>
          <Text white marginTop={8} opacity={0.65}>
            {user.email}
          </Text>
        </TitleBox>
        <IconButton
          style={{ alignSelf: "center", marginTop: 8 }}
          size={48}
          iconName="close"
          bgColor={colors.white}
          onPress={() => navigation.goBack()}
        />
      </Content>
      <Wrapper>
        {settings.map((item) => (
          <SettingsItem
            key={item.title}
            title={item.title}
            icon={item.icon}
            text={item.text}
            onPress={() => handlePress(item.title)}
          />
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
