import React, { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import { ActivityIndicator, Container, TextLinking } from "../../components";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/form";
import Image from "../../components/styles/Image";
import Text from "../../components/styles/Text";
import { images } from "../../config";
import { auth, firebase } from "../../firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(6)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
});

const LoginScreen = ({ navigation }) => {
  const [iconEmail, setIconEmail] = useState(images.email);
  const [iconPassword, setIconPassword] = useState(images.password);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  const focusEmail = () => {
    setIconEmail(require("../../assets/icon-email-animated.gif"));
    setIconPassword(images[31]);
  };

  const focusPassword = () => {
    setIconEmail(images[30]);
    setIconPassword(require("../../assets/icon-password-animated.gif"));
  };

  const handleSubmit = async ({ email, password }) => {
    Keyboard.dismiss();
    setLoading(true);

    try {
      // 设置用户持久登录
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

      await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => setLoading(false));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <ActivityIndicator visible={loading} />;

  return (
    <Container>
      <Image logo2 source={images[28]} />
      <Title caption1>Start learning Sccess pro content.</Title>
      <Wrapper>
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            blurOnSubmit={false}
            image={iconEmail}
            keyboardAppearance="default"
            keyboardType="email-address"
            name="email"
            onFocus={focusEmail}
            onSubmitEditing={() => focusNextField("password")}
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
            image={iconPassword}
            keyboardAppearance="default"
            keyboardType="default"
            maxLength={50}
            name="password"
            onFocus={focusPassword}
            onRef={(input) => (inputs["password"] = input)}
            placeholder="Password"
            returnKeyLabel="go"
            returnKeyType="go"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Log in" />
        </Form>
        <TextLinking
          caption="Don't have an account? "
          title="Create here"
          onPress={() => navigation.navigate("Register")}
        />
      </Wrapper>
    </Container>
  );
};

const Title = styled(Text)`
  width: 180px;
  text-align: center;
  text-transform: uppercase;

  ${({ theme: { space } }) => ({
    marginTop: space.l1,
  })}
`;

const Wrapper = styled.View`
  width: 100%;

  ${({ theme: { space } }) => ({
    padding: space.m1,
  })}
`;

export default LoginScreen;
