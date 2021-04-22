import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

const Icon = ({
  bgColor,
  color = 'white',
  iconRatio = 0.6,
  iconName,
  IconComponent = MaterialCommunityIcons,
  size = 40,
}) => {
  return (
    <Container {...{ bgColor, size }}>
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

export default Icon;
