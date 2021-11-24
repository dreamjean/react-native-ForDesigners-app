import { Pressable } from "react-native";
import styled from "styled-components";

import Notifications from "../../assets/icons/icon-notifications.svg";
import { images } from "../../config";
import Image from "../styles/Image";
import Text from "../styles/Text";
import SvgIconButton from "../SvgIconButton";

const Avatar = ({ avatar, name, onAvatarPress, onIconPress }) => {
  return (
    <Container>
      <Pressable
        onPress={onAvatarPress}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <Image
          avatar2
          resizeMode="cover"
          source={avatar ? { uri: avatar } : images.avatarDefault}
        />
      </Pressable>
      <TitleBar>
        <Text body1>Welcome back,</Text>
        <Text subTitle2 dark>
          {name}
        </Text>
      </TitleBar>
      <SvgIconButton
        SvgName={Notifications}
        width={24}
        height={24}
        number={4}
        onPress={onIconPress}
      />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.l1,
    paddingTop: space.xxl,
    paddingBottom: space.m1,
  })}
`;

const TitleBar = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    marginLeft: space.m2,
  })}
`;

export default Avatar;
