import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../config';

const RoundIcon = ({
  backgroundColor = colors.white,
  IconComponent = MaterialCommunityIcons,
  iconColor = colors.blue,
  iconRatio = 0.7,
  name,
  size,
}) => {
  return (
    <Container {...{ backgroundColor, size }}>
      <IconComponent name={name} size={iconRatio * size} color={iconColor} />
    </Container>
  );
};

const Container = styled.View`
  ${({ backgroundColor, size }) => ({
    backgroundColor,
    width: size,
    height: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  })}
`;

export default RoundIcon;
