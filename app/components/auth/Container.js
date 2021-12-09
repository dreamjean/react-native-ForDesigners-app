import { useIsFocused } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components";

import { constants, images } from "../../config";

const { height, AUTH_CARD_WIDTH } = constants;

const Container = ({ children }) => {
  const isFocused = useIsFocused();
  const scale = useSharedValue(0.5);
  const translateY = useSharedValue(height);

  useEffect(() => {
    if (isFocused) {
      scale.value = withSpring(1);
      translateY.value = withTiming(0);
    } else {
      scale.value = withDelay(500, withSpring(0.5));
      translateY.value = withTiming(height, { duration: 600 });
    }
  }, [isFocused]);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
    };
  });

  return (
    <ImageBackground source={images.geometry}>
      <BlurView intensity={80} style={{ flex: 1 }} />
      <Cover style={StyleSheet.absoluteFill}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          extraScrollHeight={120}
          enableOnAndroid
          enableAutomaticScroll
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
        >
          <AnimatedBox style={style}>{children}</AnimatedBox>
        </KeyboardAwareScrollView>
      </Cover>
      <StatusBar style="light" />
    </ImageBackground>
  );
};

const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: ${height}px;
`;

const Cover = styled.View`
  ${({ theme: { colors } }) => ({
    backgroundColor: colors.lightBlue2,
  })}
`;

const Box = styled.View`
  width: ${AUTH_CARD_WIDTH}px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;

  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.s2,
    paddingTop: space.xl,
    paddingBottom: space.l3,
  })}
`;

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default Container;
