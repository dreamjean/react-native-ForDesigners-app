import React from 'react';

import { colors } from '../constants';

const SvgIcon = ({ SvgName, color = colors.blue, width, height }) => (
  <SvgName width={width} height={height} color={color} />
);

export default SvgIcon;
