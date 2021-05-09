import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { colors } from '../config';
import Image from './styles/Image';

const TextInput = forwardRef(({ icon, image, error, touched, ...rest }, ref) => {
  return (
    <Container {...{ error, touched }}>
      <IconBox>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={!touched ? colors.grey2 : error ? colors.danger : colors.blue2}
          />
        )}
        {image && <Image icon resizeMode="contain" source={image} />}
      </IconBox>
      <Input
        {...{ ref }}
        {...rest}
        numberOfLines={1}
        selectionColor={colors.grey}
        placeholderTextcolor={colors.grey2}
      />
    </Container>
  );
});

const Container = styled.View`
  flex-direction: row;
  border-width: 1px;
  height: 44px;
  align-items: center;

  ${({ error, touched, theme: { colors, space, radii } }) => ({
    borderColor: !touched ? colors.grey2 : error ? colors.danger : colors.blue2,
    borderRadius: radii.s2,
    marginVertical: space.s2,
  })}
`;

const IconBox = styled.View`
  ${({ theme: { space } }) => ({
    paddingHorizontal: space.s2,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, getFont, size, space } }) => ({
    fontFamily: getFont(2),
    fontSize: size.m1,
    color: colors.darkGreys,
    padding: space.s1,
  })}
`;

export default TextInput;
