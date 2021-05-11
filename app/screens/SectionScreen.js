import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Markdown from 'react-native-showdown';
import styled from 'styled-components';

import { Header } from '../components';

const SectionScreen = ({ route, navigation }) => {
  const section = route?.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Header
          title={section.title}
          subTitle={section.subTitle}
          caption={section.caption}
          imageUrl={section.image.url}
          logoUrl={section.logo.url}
          onPress={() => navigation.navigate('Video', { section })}
        />

        <Content>
          <Markdown
            markdown={section.content}
            pureCSS={css}
            scalesPageToFit={false}
            scrollEnabled={false}
          />
        </Content>

        <StatusBar barStyle="light-content" />
      </Container>
    </ScrollView>
  );
};

const css = `
  * {
    font-family: -apple-system, Roboto;
    padding: 0;
    margin: 0;
    font-size: 17px;
    font-weight: normal;
    color: #3c4560;
    line-height: 24px;
  }

  h2 {
    font-size: 20px;
    text-transform: uppercase;
    color: #b8bece;
    font-weight: 600;
    margin-top: 50px;
  }

  p {
    margin-top: 20px;
  }

  a {
    color: #4775f2;
    font-weight: 600;
    text-decoration: none;
  }

  strong {
    font-weight: 700;
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
  }

  pre {
    padding: 20px;
    background: #212C4F;
    overflow: hidden;
    word-wrap: break-word;
    border-radius: 10px;
    margin-top: 20px;
  }
  code {
    color: white;
  }
`;

const Container = styled.View`
  flex: 1;
`;

const Content = styled.View`
  height: 1000px;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    padding: space.l1,
  })}
`;

export default SectionScreen;
