import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import styled from 'styled-components';

import { IconButton, Notification } from '../components';
import Text from '../components/styles/Text';
import { calendar, colors } from '../config';
import { notifications } from '../data';

const { width } = calendar;

let cardWidth = width - 40;
if (width > 500) {
  cardWidth = 460;
}

const NotificationsScreen = ({ navigation }) => {
  const [items, setItems] = useState(notifications);
  const translateY = useSharedValue(30);
  const opacity = useSharedValue(0);

  useEffect(
    useCallback(() => {
      let isActive = true;

      translateY.value = withSpring(isActive ? 0 : 30);
      opacity.value = withDelay(150, withTiming(isActive ? 1 : 0, { duration: 500 }));

      return () => (isActive = false);
    }, [translateY, opacity]),
  );

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          padding: 20,
          paddingTop: 50,
        }}
        showsVerticalScrollIndicator={false}
      >
        <IconButton
          iconName="close"
          size={44}
          color={colors.blue}
          bgColor={colors.white}
          onPress={() => navigation.goBack()}
        />

        <Wrapper>
          <Text subTitle2 upper>
            New
          </Text>
        </Wrapper>
        {items.map((item) => (
          <Notification
            key={item.id}
            {...{ item, translateY, opacity }}
            onRemove={() => handleDelete(item.id)}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  width: ${cardWidth}px;
`;

export default NotificationsScreen;
