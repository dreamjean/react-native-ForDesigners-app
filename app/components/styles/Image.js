import styled, { css } from 'styled-components';

const avatarStyle = css`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const logo1Style = css`
  width: 36px;
  height: 36px;
`;

const logo2Style = css`
  width: 44px;
  height: 44px;
`;

const logo3Style = css`
  width: 48px;
  height: 48px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;

  ${({ avatar }) => avatar && avatarStyle}
  ${({ logo1 }) => logo1 && logo1Style}
  ${({ logo2 }) => logo2 && logo2Style}
  ${({ logo3 }) => logo3 && logo3Style}
`;

export default Image;
