import { Ionicons } from "@expo/vector-icons";
import { Animated } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { colors, constants } from "../../config";

const { ACTION_WIDTH } = constants;

const RightAction = ({ progress, onPress }) => {
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [ACTION_WIDTH, 0],
  });

  const opacity = progress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.5, 1],
  });

  return (
    <Container>
      <Animated.View
        style={{
          flex: 1,
          marginTop: 20,
          opacity,
          transform: [{ translateX: trans }],
        }}
      >
        <RemoveButton onPress={onPress}>
          <Ionicons name="trash-bin" size={30} color={colors.white} />
        </RemoveButton>
      </Animated.View>
    </Container>
  );
};

const Container = styled.View`
  width: ${ACTION_WIDTH}px;
`;

const RemoveButton = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.danger,
  })}
`;

export default RightAction;
