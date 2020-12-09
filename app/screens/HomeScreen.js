import React from 'react';
import styled from 'styled-components';

import { Avatar, Card } from '../components';
import SafeAreaBox from '../components/styles/SafeAreaBox';
import Text from '../components/styles/Text';
import { images } from '../constants';

const HomeScreen = () => {
  return (
    <SafeAreaBox>
      <Avatar avatar={images[17]} name="Rokia" />
      <SubTitle body1>Continue Learning</SubTitle>
      <Card
        image={images[1]}
        heading="Styled Components"
        logo={images[18]}
        title="React Native"
        subTitle="5of12course"
      />
      <SubTitle body1>Continue Learning</SubTitle>
    </SafeAreaBox>
  );
};

const SubTitle = styled(Text)`
  text-transform: uppercase;
`;

export default HomeScreen;
