import React from 'react';
import styled from 'styled-components';

import { calendar } from '../../constants';
import Image from '../styles/Image';
import ImageBackground from '../styles/ImageBackground';
import Text from '../styles/Text';

const { COURSE_CARD_WIDTH, COURSE_CARD_HEIGHT } = calendar;

const CourseCard = ({ image, logo, title, subTitle, caption, avatar, author }) => {
  return (
    <Container>
      <ImageBackground courseImage resizeMode="cover" source={image}>
        <Logo logo3 resizeMode="contain" source={logo} />
        <TextBox>
          <Text body1 white opacity={0.8} marginVertical={8} upper>
            {subTitle}
          </Text>
          <Text title2 white>
            {title}
          </Text>
        </TextBox>
      </ImageBackground>
      <Wrapper>
        <Image avatar source={avatar} />
        <Info>
          <Text caption2 dark marginVertical={2}>
            {caption}
          </Text>
          <Text caption1 marginVertical={2}>
            Taught by{' '}
            <Text dark opacity={0.6}>
              {author}
            </Text>
          </Text>
        </Info>
      </Wrapper>
    </Container>
  );
};

const Container = styled.View`
  width: ${COURSE_CARD_WIDTH}px;
  height: ${COURSE_CARD_HEIGHT}px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m1,
    marginTop: space.m3,
  })};
`;

const Logo = styled(Image)`
  align-self: center;

  ${({ theme: { space } }) => ({
    marginTop: space.xxl,
  })}
`;

const TextBox = styled.View`
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 180px;
`;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingLeft: space.m1,
  })}
`;

const Info = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.s2,
  })}
`;

export default CourseCard;
