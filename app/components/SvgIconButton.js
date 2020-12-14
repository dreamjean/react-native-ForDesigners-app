import React from 'react';
import { Pressable } from 'react-native';

import { colors } from '../constants';

const SvgIconButton = ({ SvgName, color = colors.blue, width, height, onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
    })}
  >
    <SvgName width={width} height={height} color={color} />
  </Pressable>
);

export default SvgIconButton;
