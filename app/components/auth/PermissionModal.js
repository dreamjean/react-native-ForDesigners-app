import React from "react";
import { Modal } from "react-native";
import styled from "styled-components";

import { colors } from "../../config";
import Button from "../Button";
import Text from "../styles/Text";

function PermissionModal({
  visible,
  onCameraPermission,
  onCameraRollPermission,
  onCloseModal,
}) {
  return (
    <Modal {...{ visible }} animationType="slide" transparent>
      <Container style={{ elevation: 10 }}>
        <TitleWrapper>
          <Text title2>Upload Photo</Text>
          <Text tiny marginTop={6}>
            Choose your profile picture
          </Text>
        </TitleWrapper>
        <Box>
          <Button title="Take Photo" onPress={onCameraPermission} />
          <Button
            title="Choose Fromm Library"
            onPress={onCameraRollPermission}
          />
          <Button
            title="Cancle"
            bgColor={colors.transparent}
            color={colors.blue2}
            onPress={onCloseModal}
          />
        </Box>
      </Container>
    </Modal>
  );
}
const Container = styled.View`
  width: 100%;
  height: 280px;
  position: absolute;
  bottom: 0;
  justify-content: flex-end;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.35);

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderTopLeftRadius: radii.m2,
    borderTopRightRadius: radii.m2,
  })}
`;

const TitleWrapper = styled.View`
  align-items: center;
  justify-content: center;

  ${({ theme: { space } }) => ({
    padding: space.s3,
  })}
`;

const Box = styled.View`
  justify-content: center;

  ${({ theme: { space } }) => ({
    margin: space.s2,
  })}
`;

export default PermissionModal;
