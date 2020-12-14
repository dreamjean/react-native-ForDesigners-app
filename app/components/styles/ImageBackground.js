import styled, { css } from 'styled-components';

import { calendar } from '../../constants';

const { COURSE_IMAGE_HEIGHT } = calendar;

const courseImageStyle = css`
  width: 100%;
  height: ${COURSE_IMAGE_HEIGHT}px;
`;

const ImageBackground = styled.ImageBackground`
  ${({ courseImage }) => courseImage && courseImageStyle}
`;

export default ImageBackground;
