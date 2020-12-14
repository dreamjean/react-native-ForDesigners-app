import React from 'react';
import styled from 'styled-components';

import Text from '../styles/Text';

const ListItem = ({ Icon, title, subTitle }) => {
  return (
    <Container>
      <Icon width={45} height={45} />
      <TextBox>
        <Text title1 dark>
          {title}
        </Text>
        <Text body2>{subTitle}</Text>
      </TextBox>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

const TextBox = styled.View`
  ${({ theme: { space } }) => ({
    marginLeft: space.m1,
  })}
`;

export default ListItem;
