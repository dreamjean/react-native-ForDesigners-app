import React from 'react';
import styled from 'styled-components';

import { courses } from '../../data';
import CourseCard from './CourseCard';

const Courses = () => {
  return (
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
  );
};

const CoursesBox = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ theme: { space } }) => ({
    paddingLeft: space.s3,
    paddingBottom: space.m3,
  })}
`;

export default Courses;
