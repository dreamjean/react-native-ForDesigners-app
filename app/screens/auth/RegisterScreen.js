import { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import authApi from "../../api/auth";
import storageApi from "../../api/storage";
import useAuth from "../../auth/useAuth";
import { Container, TextLinking, UploadModal } from "../../components";
import {
  ErrorMessage,
  Form,
  FormField,
  FormImagePicker,
  SubmitButton,
} from "../../components/form";
import Text from "../../components/styles/Text";
import useFocusInput from "../../hooks/useFocusInput";

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
  const [progress, setProgress] = useState(0);
  const { setUser } = useAuth();
  const { onRef, focusNextField } = useFocusInput();

  const handleSubmit = async (userInfo) => {
    Keyboard.dismiss();
    setProgress(0);
    setUploadVisible(true);

    const { name, email, password, photo } = userInfo;

    try {
      const {
        user: { uid },
      } = await authApi.register(email, password);

      await storageApi.uploadImage(
        uid,
        name,
        email,
        photo,
        setProgress,
        setError
      );

      setUser({ id: uid });
    } catch (error) {
      setError(error.message);
      console.log("@Error Register: ", error.message);
    }
    setUploadVisible(false);
  };

  return (
    <Container>
      <UploadModal
        visible={uploadVisible}
        progress={progress}
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
            onRef={onRef("email")}
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
            onRef={onRef("password")}
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
