import React from 'react';
import styled from 'styled-components';

import Image from '../styles/Image';
import Text from '../styles/Text';

const LogoCard = ({ logo, title, subTitle }) => {
  return (
    <Container>
      <ImageBox>
        <Image source={logo} resizeMode="contain" />
      </ImageBox>
      <Wrapper>
        <Title {...{ subTitle }}>{title}</Title>
        {subTitle && (
          <Text body1 upper>
            {subTitle}
          </Text>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ImageBox = styled.View`
  ${({ subTitle }) => ({
    height: subTitle ? 44 : 36,
    width: subTitle ? 44 : 36,
  })}
`;

const Wrapper = styled.View`
  ${({ theme: { space } }) => ({
    marginLeft: space.s2,
  })}
`;

const Title = styled(Text)`
  ${({ subTitle, theme: { getFont, size, colors, space } }) => ({
    color: colors.darkBlue,
    fontFamily: getFont(1),
    fontSize: subTitle ? size.title1 : size.l1,
    marginBottom: subTitle ? space.s1 : space.n,
  })}
`;

export default LogoCard;
