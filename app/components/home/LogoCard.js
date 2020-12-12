import React from 'react';
import styled from 'styled-components';

import Image from '../styles/Image';
import Text from '../styles/Text';

const LogoCard = ({ logo, title }) => {
  return (
    <Container>
      <Image logo1 source={logo} resizeMode="contain" />
      <Title body2>{title}</Title>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);

  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.s2,
    paddingVertical: space.m1,
    paddingHorizontal: space.m2,
    marginRight: space.m1,
    marginBottom: space.m1,
  })}
`;

const Title = styled(Text)`
  ${({ theme: { space } }) => ({
    marginLeft: space.s2,
  })}
`;

export default LogoCard;
