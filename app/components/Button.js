import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../config";
import Text from "./styles/Text";

const Button = ({
  bgColor = colors.blue2,
  borderColor,
  color = colors.white,
  title,
  margin,
  width = "100%",
  upper = false,
  onPress,
}) => {
  return (
    <Pressable
      {...{ onPress }}
      style={({ pressed }) => ({
        borderRadius: 5,
        opacity: pressed ? 0.5 : 1,
        overflow: "hidden",
        height: 50,
        marginTop: 10,
        margin,
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <Container {...{ bgColor, borderColor, width }}>
        <Text button1 {...{ color, upper }}>
          {title}
        </Text>
      </Container>
    </Pressable>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px #c2cbff;

  ${({ bgColor, borderColor, width, theme: { radii } }) => ({
    backgroundColor: bgColor,
    borderColor,
    borderRadius: radii.s2,
    borderWidth: borderColor ? 2 : 0,
    height: borderColor ? "85%" : "100%",
    width,
  })}
`;

export default Button;
