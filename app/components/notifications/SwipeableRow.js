import React, { useRef } from "react";
import { Alert, Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import RightAction from "./RightAction";

const SwipeableRow = ({ children, onRemove }) => {
  const swipeable = useRef();

  const handleRemovePress = () => {
    Alert.alert("Remove Item", "Are you share you want to remove this item?", [
      {
        text: "Cancel",
        onPress: close(),
      },
      {
        text: "Yes",
        onPress: onRemove,
      },
    ]);
  };

  const close = () => {
    swipeable.current.close();
  };

  return (
    <Animated.View>
      <Swipeable
        ref={swipeable}
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={(progress) => (
          <RightAction progress={progress} onPress={handleRemovePress} />
        )}
      >
        {children}
      </Swipeable>
    </Animated.View>
  );
};

export default SwipeableRow;
