import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";

import { Courses, CourseSection } from "../components";
import Image from "../components/styles/Image";
import Text from "../components/styles/Text";
import { colors, images } from "../config";
import { courseSections } from "../data";

const CoursesScreen = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageCover source={images.background12}>
          <LinearGradient
            colors={[colors.transparent, colors.light]}
            style={StyleSheet.absoluteFill}
          />
          <Logo logo3 source={images.logoReact} />
          <HeaderWrapper>
            <Text caption3 upper>
              12 Sections
            </Text>
            <Text title3>React Native for Designers</Text>
          </HeaderWrapper>
          <Sections>
            <SectionScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 10 }}
            >
              {courseSections.map((section, index) => (
                <CourseSection
                  key={index}
                  title={section.title}
                  image={section.image}
                  progress={section.progress}
                />
              ))}
            </SectionScrollView>
          </Sections>
          <Author>
            <Image avatar source={images.avatar} />
            <Text caption2>Taught by Meng To</Text>
          </Author>
        </ImageCover>
        <Subtitle subTitle1 upper>
          Latest Courses
        </Subtitle>
        <Courses />
      </ScrollView>
      <StatusBar style="light" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const ImageCover = styled.ImageBackground`
  height: 460px;
  width: 100%;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.darkGrey,
  })}
`;

const Logo = styled(Image)`
  align-self: center;

  ${({ theme: { space } }) => ({
    marginTop: space.xxl,
  })}
`;

const HeaderWrapper = styled.View`
  ${({ theme: { space } }) => ({
    marginLeft: space.l1,
    marginTop: space.l2,
  })}
`;

const Sections = styled.View`
  ${({ theme: { space } }) => ({
    marginTop: space.l1,
  })}
`;

const SectionScrollView = styled.ScrollView``;

const Author = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginTop: space.m1,
    marginLeft: space.l1,
  })}
`;

const Subtitle = styled(Text)`
  ${({ theme: { space } }) => ({
    marginTop: space.l1,
    marginLeft: space.l1,
  })}
`;

export default CoursesScreen;
