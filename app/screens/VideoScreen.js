import { Entypo } from "@expo/vector-icons";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import styled from "styled-components";

import { IconButton } from "../components";
import Text from "../components/styles/Text";
import { colors } from "../config";

const VideoScreen = ({ navigation, route }) => {
  return (
    <Container>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: "https://player.vimeo.com/external/281472837.hd.mp4?s=c78b611b5055e373c69b6dd7674e2051128bc7b8&profile_id=175",
          },
        }}
        inFullscreen={true}
      />
      <TitleContainer>
        <IconButton
          size={40}
          iconName="chevron-thin-left"
          IconComponent={Entypo}
          color={colors.white}
          bgColor={colors.transparent}
          onPress={() => navigation.goBack()}
          style={{ marginRight: 5 }}
        />
        <Text subTitle1 white>
          {route?.params?.section.title}
        </Text>
      </TitleContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: black;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
`;

export default VideoScreen;
