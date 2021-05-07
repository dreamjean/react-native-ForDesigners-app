import LottieView from 'lottie-react-native';
import React from 'react';
import styled from 'styled-components';

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <Container>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/lottie-loading-fluid.json.json')}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  opacity: 0.7;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

export default ActivityIndicator;
