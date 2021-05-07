import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

import { calendar } from '../../config';
import Image from '../styles/Image';
import Text from '../styles/Text';

const { width, COURSE_CARD_HEIGHT, COURSE_IMAGE_HEIGHT } = calendar;

const getCourseWidth = (screenWidth) => {
  let cardWidth = screenWidth - 40;
  if (screenWidth >= 768) cardWidth = (screenWidth - 60) / 2;
  if (screenWidth >= 1024) cardWidth = (screenWidth - 80) / 3;
  return cardWidth;
};

const CourseCard = ({ image, logo, title, subTitle, caption, avatar, author }) => {
  const [cardWidth, setCardWidth] = useState(getCourseWidth(width));

  useEffect(() => {
    Dimensions.addEventListener('change', adaptLayout);
  }, []);

  const adaptLayout = (dimensions) => setCardWidth(getCourseWidth(dimensions.window.width));

  return (
    <Container style={{ width: cardWidth }}>
      <ImageBackground courseImage resizeMode="cover" source={image}>
        <Logo logo3 resizeMode="contain" source={logo} />
        <TextBox>
          <Text body1 white opacity={0.8} upper>
            {subTitle}
          </Text>
          <Text title2 white marginTop={8}>
            {title}
          </Text>
        </TextBox>
      </ImageBackground>
      <Wrapper>
        <Image avatar1 source={avatar} />
        <Info>
          <Text caption2 dark>
            {caption}
          </Text>
          <Text caption1 marginTop={4}>
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
  height: ${COURSE_CARD_HEIGHT}px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m1,
    marginHorizontal: space.s3,
    marginTop: space.m3,
  })};
`;

const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: ${COURSE_IMAGE_HEIGHT}px;
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
