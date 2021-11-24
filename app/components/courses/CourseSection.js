import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import styled from "styled-components";

import { colors } from "../../config";
import Text from "../styles/Text";

const CourseSection = ({ title, image, progress }) => (
  <Container>
    <ImageMask source={image}>
      <LinearGradient
        colors={[colors.transparent, colors.light]}
        style={StyleSheet.absoluteFill}
      />
      <LinearGradient
        colors={[colors.blue3, colors.lightBlue]}
        start={[0, 0]}
        end={[1, 0]}
        style={{
          position: "absolute",
          bottom: 0,
          height: 4,
          borderRadius: 2,
          width: progress * 100 + "%",
        }}
      />
      <Border style={StyleSheet.absoluteFillObject} />
      <Text caption3 white marigin={16}>
        {title}
      </Text>
    </ImageMask>
  </Container>
);

const Container = styled.View`
  width: 150px;
  height: 150px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);

  ${({ theme: { radii } }) => ({
    borderRadius: radii.s2,
  })}
`;

const ImageMask = styled.ImageBackground`
  height: 100%;
  overflow: hidden;
  justify-content: flex-end;

  ${({ theme: { radii, space } }) => ({
    borderRadius: radii.s2,
    marginLeft: space.l1,
    padding: space.s2,
  })}
`;

const Border = styled.View`
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export default CourseSection;
