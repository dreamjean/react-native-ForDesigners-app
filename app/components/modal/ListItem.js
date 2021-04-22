import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../config';
import Text from '../styles/Text';

const ListItem = ({ icon, title, subTitle }) => {
  return (
    <Container>
      <Ionicons name={icon} size={32} color={colors.blue} />
      <TextBox>
        <Text title1 dark>
          {title}
        </Text>
        <Text body2 marginVertical={5}>
          {subTitle}
        </Text>
      </TextBox>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginBottom: space.m3,
  })}
`;

const TextBox = styled.View`
  ${({ theme: { space } }) => ({
    marginLeft: space.l2,
  })}
`;

export default ListItem;
