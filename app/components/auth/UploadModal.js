import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress";
import styled from "styled-components";

import { colors } from "../../config";

const UploadModal = ({ visible = false, onDone, progress }) => {
  return (
    <Modal {...{ visible }}>
      <Container>
        {progress < 100 ? (
          <Progress.Bar progress={progress} width={200} color={colors.blue} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../../assets/animations/lottie-checked-done.json")}
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
