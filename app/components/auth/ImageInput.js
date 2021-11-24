import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Platform, Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../../config";
import Image from "../styles/Image";
import PermissionModal from "./PermissionModal";

const ImageInput = ({ image, onChangeImage }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    requestMediaLibraryPermission();
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestMediaLibraryPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const requestCameraPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
      }
    }
  };

  const pickerImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error @pickImage", error);
    }

    setModalVisible(false);
  };

  const pickerPhotograph = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error @pickImage", error);
    }

    setModalVisible(false);
  };

  return (
    <Pressable
      style={({ pressed }) => ({
        background: pressed ? colors.lightBlue : colors.lightBlue2,
        alignItems: "center",
        justifyContent: "center",
      })}
      onPress={() => setModalVisible(true)}
    >
      <Container>
        {image ? (
          <Image source={{ uri: image }} />
        ) : (
          <MaterialCommunityIcons name="plus" size={40} color={colors.white} />
        )}
      </Container>
      <PermissionModal
        visible={modalVisible}
        onCloseModal={() => setModalVisible(false)}
        onCameraRollPermission={pickerImage}
        onCameraPermission={pickerPhotograph}
      />
    </Pressable>
  );
};

const Container = styled.View`
  width: 80px;
  height: 80px;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  ${({ theme: { colors, space, radii } }) => ({
    borderRadius: radii.l2,
    backgroundColor: colors.lightBlue2,
    marginBottom: space.m3,
    marginTop: space.s1,
  })}
`;

export default ImageInput;
