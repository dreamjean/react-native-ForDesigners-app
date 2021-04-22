import React from 'react';
import { Pressable } from 'react-native';

import RoundIcon from './RoundIcon';

const IconButton = ({ onPress, style, ...rest }) => {
  return (
    <Pressable
      style={[
        style,
        ({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        }),
      ]}
      {...{ onPress }}
    >
      <RoundIcon {...rest} />
    </Pressable>
  );
};

export default IconButton;
