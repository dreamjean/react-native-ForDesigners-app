import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

import { colors, constants } from "../../config";
import IconButton from "../IconButton";
import Image from "../styles/Image";
import Text from "../styles/Text";

const { SECTION_IMAGE_HEIGHT } = constants;

const Header = ({ title, subTitle, caption, imageUrl, logoUrl, onPress }) => {
  const navigation = useNavigation();

  return (
    <ImageCover source={{ uri: imageUrl }}>
      <Heading>
        <Wrapper>
          <Image logo source={{ uri: logoUrl }} />
          <Text caption1 white opacity={0.65} upper>
            {caption}
          </Text>
        </Wrapper>
        <Title title2 white marginTop={15}>
          {title}
        </Title>
      </Heading>
      <Caption body1 white>
        {subTitle}
      </Caption>
      <IconButton
        style={{ position: "absolute", top: 28, right: 20 }}
        iconName="close"
        bgColor={colors.white}
        color={colors.darkBlue}
        size={30}
        onPress={() => navigation.goBack()}
      />
      <IconButton
        iconName="play"
        bgColor={colors.lightGrey2}
        color={colors.lightGrey}
        size={100}
        onPress={onPress}
        style={{ alignSelf: "center", top: 25 }}
      />
    </ImageCover>
  );
};

const ImageCover = styled.ImageBackground`
  height: ${SECTION_IMAGE_HEIGHT}px;
  width: 100%;
`;

const Heading = styled.View`
  top: 40px;
  left: 20px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled(Text)`
  width: 170px;
`;

const Caption = styled(Text)`
  width: 300px;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

export default Header;
