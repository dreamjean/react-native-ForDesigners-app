import LottieView from 'lottie-react-native';
import React from 'react';
import styled from 'styled-components';

const UploadModal = ({ visible = false, onDone, uploadState }) => {
  return (
    <Modal {...{ visible }}>
      <Container>
        {uploadState === 'uploading' ? (
          <LottieView
            autoPlay
            loop
            source={require('../../assets/animations/lottie-fluid-loading.json')}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../../assets/animations/lottie-checked-done.json')}
          />
        )}
      </Container>
    </Modal>
  );
};

const Modal = styled.Modal``;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  opacity: 0.7;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

export default UploadModal;
