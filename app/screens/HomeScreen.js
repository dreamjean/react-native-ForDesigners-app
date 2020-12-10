import React from 'react';
import styled from 'styled-components';

import { Avatar, Card } from '../components';
import SafeAreaBox from '../components/styles/SafeAreaBox';
import Text from '../components/styles/Text';
import { images } from '../constants';
import { cards } from '../data';

const HomeScreen = () => {
  return (
    <SafeAreaBox>
      <Avatar avatar={images[17]} name="Rokia" />
      <Wrapper>
        <SubTitle body1>Continue Learning</SubTitle>
        <SectionCards horizontal showsHorizontalScrollIndicator={false}>
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              heading={card.heading}
              logo={card.logo}
              title={card.title}
              subTitle={card.caption}
            />
          ))}
        </SectionCards>
      </Wrapper>
      <SubTitle body1>Continue Learning</SubTitle>
    </SafeAreaBox>
  );
};

const SubTitle = styled(Text)`
  text-transform: uppercase;
`;

const SectionCards = styled.ScrollView``;

const Wrapper = styled.View`
  ${({ theme: { space } }) => ({
    paddingLeft: space.m2,
  })}
`;

export default HomeScreen;
