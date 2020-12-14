import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components';

import { Avatar, Card, CourseCard, LogoCard } from '../components';
import SafeAreaBox from '../components/styles/SafeAreaBox';
import Text from '../components/styles/Text';
import { images } from '../constants';
import { courses, logos, sectionCards } from '../data';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaBox>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Avatar
          avatar={images[17]}
          name="Rokia"
          onAvatarPress={() => navigation.navigate('Settings')}
          onIconPress={() => navigation.navigate('Notifications')}
        />
        <Wrapper>
          <Listing horizontal showsHorizontalScrollIndicator={false}>
            {logos.map((logo, index) => (
              <LogoCard key={index} logo={logo.image} title={logo.text} />
            ))}
          </Listing>

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
        <CoursesBox>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              author={course.author}
              avatar={course.avatar}
              caption={course.caption}
              image={course.image}
              logo={course.logo}
              subTitle={course.subtitle}
              title={course.title}
            />
          ))}
        </CoursesBox>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaBox>
  );
};

const ScrollView = styled.ScrollView`
  flex: 1;
`;

const SubTitle = styled(Text)`
  text-transform: uppercase;

  ${({ theme: { space } }) => ({
    marginLeft: space.m3,
  })}
`;

const Listing = styled.ScrollView`
  ${({ theme: { space } }) => ({
    padding: space.m3,
  })}
`;

const Wrapper = styled.View``;

const CoursesBox = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    padding: space.m3,
    paddingTop: space.n,
  })}
`;

export default HomeScreen;
