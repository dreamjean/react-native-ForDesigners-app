import { useQuery } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { userClient } from '../api/user';
import { Avatar, Card, CourseCard, LogoCard } from '../components';
import SafeAreaBox from '../components/styles/SafeAreaBox';
import Text from '../components/styles/Text';
import { courses, logos } from '../data';
import GET_CARDS_ITEMS from '../query/sectionCards';

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState({ email: '', name: '', photo: null, position: '' });
  const { loading, error, data } = useQuery(GET_CARDS_ITEMS);
  const sectionCards = data?.cardsCollection?.items;

  const restoreUser = async () => {
    try {
      await userClient
        .get()
        .then((response) => response.data[0])
        .then((result) => {
          setUser(result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    restoreUser();
  }, [user]);

  if (loading)
    return (
      <Text body2 dark>
        Loading...
      </Text>
    );
  if (error)
    return (
      <Text body2 dark>
        Error...
      </Text>
    );

  return (
    <SafeAreaBox>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Avatar
          avatar={user.photo}
          name={user.name}
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
            {sectionCards.map((card) => (
              <Card
                key={card.id}
                image={card.image}
                heading={card.heading}
                logo={card.logo}
                title={card.title}
                caption={card.caption}
                onPress={() => navigation.navigate('Section', card)}
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
