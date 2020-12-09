import React from 'react';
import styled from 'styled-components';

import Image from '../styles/Image';
import Text from '../styles/Text';
import LogoCard from './LogoCard';

const Card = ({ image, heading, ...rest }) => {
  return (
    <Container>
      <Cover>
        <Image source={image} />
        <Heading title2>{heading}</Heading>
      </Cover>
      <Info>
        <LogoCard {...rest} />
      </Info>
    </Container>
  );
};

const Container = styled.View`
  width: 315px;
  height: 280px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);

  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m1,
    marginRight: space.m2,
    marginTop: space.m2,
  })}
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  overflow: hidden;

  ${({ theme: { radii } }) => ({
    borderTopLeftRadius: radii.m1,
    borderTopRightRadius: radii.m1,
  })}
`;

const Heading = styled(Text)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 170px;
`;

const Info = styled.View`
  flex: 1;
  justify-content: center;

  ${({ theme: { space } }) => ({
    paddingLeft: space.m2,
  })}
`;

export default Card;
