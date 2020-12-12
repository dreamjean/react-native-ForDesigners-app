import styled, { css } from 'styled-components';

const logo1Style = css`
  width: 36px;
  height: 36px;
`;

const logo2Style = css`
  width: 44px;
  height: 44px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;

  ${({ logo1 }) => logo1 && logo1Style}
  ${({ logo2 }) => logo2 && logo2Style}
`;

export default Image;
