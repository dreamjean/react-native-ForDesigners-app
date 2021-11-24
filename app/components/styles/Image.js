import styled, { css } from "styled-components";

const avatarStyle = css`
  width: 22px;
  height: 22px;
  border-radius: 11px;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    marginRight: space.s2,
  })}
`;

const avatar1Style = css`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const avatar2Style = css`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

const logoStyle = css`
  width: 24px;
  height: 24px;

  ${({ theme: { space } }) => ({
    marginRight: space.s2,
  })}
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

const iconStyle = css`
  width: 24px;
  height: 24px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;

  ${({ avatar }) => avatar && avatarStyle}
  ${({ avatar1 }) => avatar1 && avatar1Style}
  ${({ avatar2 }) => avatar2 && avatar2Style}
  ${({ logo }) => logo && logoStyle}
  ${({ logo1 }) => logo1 && logo1Style}
  ${({ logo2 }) => logo2 && logo2Style}
  ${({ logo3 }) => logo3 && logo3Style}
  ${({ icon }) => icon && iconStyle}
`;

export default Image;
