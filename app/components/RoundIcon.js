import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";

import { colors } from "../config";

const RoundIcon = ({
  bgColor,
  color = colors.blue,
  iconRatio = 0.6,
  iconName,
  IconComponent = MaterialCommunityIcons,
  size = 40,
}) => {
  return (
    <Container {...{ bgColor, size }} style={{ elevation: 10 }}>
      <IconComponent name={iconName} size={iconRatio * size} color={color} />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);

  ${({ size, bgColor }) => ({
    backgroundColor: bgColor,
    borderRadius: size / 2,
    width: size,
    height: size,
  })}
`;

export default RoundIcon;
