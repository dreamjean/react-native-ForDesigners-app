import { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import { Container, TextLinking, UploadModal } from "../../components";
import {
  ErrorMessage,
  Form,
  FormField,
  FormImagePicker,
  SubmitButton,
} from "../../components/form";
import Text from "../../components/styles/Text";
import { auth, db, storage } from "../../firebase";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(50).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(6)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
  photo: Yup.string().required().nullable().label("Photo"),
});

const RegisterScreen = ({ navigation }) => {
  const [error, setError] = useState();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [uploadState, setUploadState] = useState("uploading");
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  const uploadImage = async (uid, name, email, image) => {
    try {
      const childPath = `users/${uid}/${Date.now()}`;
      const response = await fetch(image);
      const blob = await response.blob();

      const task = storage.ref().child(childPath).put(blob);

      const taskProgress = (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (progress === 100) setUploadState("done");
      };

      const taskError = (error) => {
        console.log(error);
      };

      const taskCompleted = () => {
        task.snapshot.ref.getDownloadURL().then((url) => {
          db.collection("users").doc(uid).set({
            uid,
            photo: url,
            name,
            email,
          });
        });
      };

      task.on("state_changed", taskProgress, taskError, taskCompleted);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (userInfo) => {
    Keyboard.dismiss();
    setUploadVisible(true);

    const { name, email, password, photo } = userInfo;

    try {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const { uid } = userCredential.user;

          uploadImage(uid, name, email, photo);

          setUploadVisible(false);
        });
    } catch (error) {
      setError(error.message);
      setUploadVisible(false);
      console.log("@Error Register: ", error.message);
    }
  };

  return (
    <Container>
      <UploadModal
        visible={uploadVisible}
        uploadState={uploadState}
        onDone={() => setUploadVisible(false)}
      />
      <Title title1>Create your account.</Title>
      <Wrapper>
        <Form
          initialValues={{
            photo: null,
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormImagePicker name="photo" />
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="name"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="account"
            keyboardAppearance="default"
            keyboardType="default"
            name="name"
            onSubmitEditing={() => focusNextField("email")}
            placeholder="Name"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="name"
          />
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="email"
            keyboardAppearance="default"
            keyboardType="email-address"
            name="email"
            onSubmitEditing={() => focusNextField("password")}
            onRef={(input) => (inputs["email"] = input)}
            placeholder="Email"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="emailAddress"
          />
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            blurOnSubmit={false}
            icon="lock"
            keyboardAppearance="default"
            keyboardType="default"
            maxLength={50}
            name="password"
            onRef={(input) => (inputs["password"] = input)}
            placeholder="Password"
            returnKeyLabel="go"
            returnKeyType="go"
            secureTextEntry
            textContentType="password"
          />

          <SubmitButton title="Register" />
        </Form>
        <TextLinking
          caption="Already have an account?"
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
      </Wrapper>
    </Container>
  );
};

const Title = styled(Text)`
  text-align: center;
  text-transform: capitalize;

  ${({ theme: { space, colors } }) => ({
    marginTop: space.l1,
    color: colors.blue2,
  })}
`;

const Wrapper = styled.View`
  width: 100%;

  ${({ theme: { space } }) => ({
    padding: space.m1,
  })}
`;

export default RegisterScreen;
