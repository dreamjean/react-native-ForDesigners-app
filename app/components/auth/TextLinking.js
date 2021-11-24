import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import Text from "../styles/Text";

const TextLinking = ({ caption, title, onPress }) => {
  return (
    <Container>
      <Text button2 grey>
        {caption}{" "}
      </Text>
      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
        {...{ onPress }}
      >
        <Text button2 bold>
          {title}
        </Text>
      </Pressable>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: center;

  ${({ theme: { space } }) => ({
    marginTop: space.m2,
  })}
`;

export default TextLinking;
