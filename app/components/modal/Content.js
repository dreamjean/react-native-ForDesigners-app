import React from 'react';
import Svg, { ClipPath, Defs, Image, Path } from 'react-native-svg';

import { calendar, colors, images } from '../../constants';
import View from '../styles/View';

const { width, BAR_HEIGHT } = calendar;
const x = width;
const y = BAR_HEIGHT - 30;

const midX1 = width * 0.25;
const midX2 = width * 0.75;
const midY = BAR_HEIGHT;

const d = `M 0 0 V ${y} C ${midX1} ${midY} ${midX2} ${midY} ${x} ${y} V 0 Z`;

const Content = ({ children }) => {
  return (
    <View>
      <Svg
        width="100%"
        height={BAR_HEIGHT}
        style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
      >
        <Defs>
          <ClipPath id="clip">
            <Path d={d} fill={colors.white} style={{ overflow: 'hidden' }} />
          </ClipPath>
        </Defs>

        <Image
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          href={images[1]}
          clipPath="url(#clip)"
        />
      </Svg>
      {children}
    </View>
  );
};

export default Content;
