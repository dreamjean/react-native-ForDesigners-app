import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { colors } from "../../config";
import Text from "../styles/Text";

const SettingsItem = ({ icon, title, text, onPress }) => {
  return (
    <Touchable {...{ onPress }}>
      <IconView>
        <Ionicons name={icon} size={34} color={colors.blue2} />
      </IconView>
      <Content>
        <Text subTitle2 dark>
          {title}
        </Text>
        <Text body1 marginTop={5}>
          {text}
        </Text>
      </Content>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.m2,
    marginBottom: space.m2,
  })}
`;

const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  ${({ theme: { space } }) => ({
    paddingLeft: space.l2,
  })}
`;

export default SettingsItem;
