import React, { useState } from 'react';
import { useDerivedValue } from 'react-native-reanimated';
import { useTiming } from 'react-native-redash';
import styled from 'styled-components';

import { Project } from '../components';

const projects = [
  {
    id: 1,
    title: 'Price Tag',
    image: require('../assets/background5.jpg'),
    author: 'Liu Yi',
    text:
      'Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China.',
  },
  {
    id: 2,
    title: 'The DM App - Ananoumous Chat',
    image: require('../assets/background6.jpg'),
    author: 'Chad Goodman',
    text:
      'Design+Code was the first resource I used when breaking into software. I went from knowing nothing about design or code to building a production ready app from scratch.',
  },
  {
    id: 3,
    title: 'Nikhiljay',
    image: require('../assets/background7.jpg'),
    author: 'Nikhil D Souza',
    text:
      "Recetly finished the React course by @Mengto, and I 10/10 would recommend. I aready rewrote my personal website in @reactjs and I'm very excited with it.",
  },
];

const step = 1 / (projects.length - 1);

const ProjectScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeIndex = useTiming(currentIndex);

  const newProjects = projects.reverse();
  // console.log(newProjects);
  return (
    <Container>
      {newProjects.map((project, index) => {
        const position = useDerivedValue(() => (project.id - 1) * step - activeIndex.value);
        // console.log('a', activeIndex.value);
        return (
          currentIndex < project.id * step && (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              author={project.author}
              text={project.text}
              position={position}
              step={step}
              onSwipe={() => setCurrentIndex((prev) => prev + step)}
            />
          )
        );
      })}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default ProjectScreen;
