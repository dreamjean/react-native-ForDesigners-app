import React from 'react';
import styled from 'styled-components';

import { Avatar, Card, LogoCard } from '../components';
import SafeAreaBox from '../components/styles/SafeAreaBox';
import Text from '../components/styles/Text';
import { images } from '../constants';
import { logos, sectionCards } from '../data';

const HomeScreen = () => {
  return (
    <SafeAreaBox>
      <Avatar avatar={images[17]} name="Rokia" />
      <Wrapper>
        <Listing horizontal showsHorizontalScrollIndicator={false}>
          {logos.map((logo, index) => (
            <LogoCard key={index} logo={logo.image} title={logo.text} />
          ))}
        </Listing>
      </Wrapper>
      <Wrapper>
        <SubTitle body1>Continue Learning</SubTitle>
        <Listing horizontal showsHorizontalScrollIndicator={false}>
          {sectionCards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              heading={card.heading}
              logo={card.logo}
              title={card.title}
              caption={card.caption}
            />
          ))}
        </Listing>
      </Wrapper>
      <SubTitle body1>Continue Learning</SubTitle>
    </SafeAreaBox>
  );
};

const SubTitle = styled(Text)`
  text-transform: uppercase;

  ${({ theme: { space } }) => ({
    paddingLeft: space.m2,
  })}
`;

const Listing = styled.ScrollView`
  ${({ theme: { space } }) => ({
    padding: space.m2,
  })}
`;

const Wrapper = styled.View``;

export default HomeScreen;
