import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import Image from "../styles/Image";
import Text from "../styles/Text";

const SectionCard = ({ image, title, logo, subTitle, caption, onPress }) => {
  return (
    <Touchable {...{ onPress }}>
      <Container style={{ elevation: 10 }}>
        <ImageCover source={{ uri: image }}>
          <Heading white title2>
            {title}
          </Heading>
        </ImageCover>
        <Info>
          <Image logo2 source={{ uri: logo }} resizeMode="contain" />
          <InfoBox>
            <Text subTitle1 dark>
              {subTitle}
            </Text>
            <Text caption2 upper marginTop={5}>
              {caption}
            </Text>
          </InfoBox>
        </Info>
      </Container>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  ${({ theme: { radii, space } }) => ({
    borderRadius: radii.m1,
    marginRight: space.m3,
    marginBottom: space.m2,
  })}
`;

const Container = styled.View`
  width: 315px;
  height: 280px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.m1,
  })}
`;

const ImageCover = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

const Heading = styled(Text)`
  top: 20px;
  left: 20px;
  width: 170px;
`;

const Info = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingLeft: space.m2,
  })}
`;

const InfoBox = styled.View`
  ${({ theme: { space } }) => ({
    marginLeft: space.s3,
  })}
`;

export default SectionCard;
