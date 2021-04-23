import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Markdown from 'react-native-showdown';
import styled from 'styled-components';

import { IconButton } from '../components';
import Image from '../components/styles/Image';
import Text from '../components/styles/Text';
import { calendar, colors } from '../config';

const { SECTION_IMAGE_HEIGHT } = calendar;

const SectionScreen = ({ navigation, route }) => {
  const section = route?.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Cover>
          <Image source={{ uri: section.image.url }} />
          <Wrapper>
            <Image logo source={{ uri: section.logo.url }} />
            <Text caption1 white opacity={0.65} upper>
              {section.caption}
            </Text>
          </Wrapper>
          <Title title2 white>
            {section.title}
          </Title>
          <Caption body1 white>
            {section.subTitle}
          </Caption>
          <IconButton
            style={{ position: 'absolute', top: 28, right: 20 }}
            iconName="close"
            bgColor={colors.white}
            color={colors.darkBlue}
            size={30}
            onPress={() => navigation.goBack()}
          />
        </Cover>
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

const Cover = styled.View`
  height: ${SECTION_IMAGE_HEIGHT}px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 20px;
`;

const Title = styled(Text)`
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled(Text)`
  width: 300px;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

const Content = styled.View`
  height: 1000px;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    padding: space.l1,
  })}
`;

export default SectionScreen;
