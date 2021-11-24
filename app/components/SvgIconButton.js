import { Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../config";
import Text from "./styles/Text";

const SvgIconButton = ({
  SvgName,
  color = colors.blue,
  width,
  height,
  number,
  onPress,
}) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
    })}
  >
    <SvgName width={width} height={height} color={color} />
    {number && (
      <Bubble>
        <Text tiny>{number}</Text>
      </Bubble>
    )}
  </Pressable>
);

const Bubble = styled.View`
  width: 16px;
  height: 16px;
  background: #3c4560;
  border-radius: 8px;
  position: absolute;
  top: -3px;
  right: -3px;
  justify-content: center;
  align-items: center;
  border-width: 1px;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.danger,
    borderColor: colors.white,
  })}
`;

export default SvgIconButton;
