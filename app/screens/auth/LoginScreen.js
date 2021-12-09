import { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import authApi from "../../api/auth";
import useAuth from "../../auth/useAuth";
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
  const auth = useAuth();

  const focusNextField = (nextField) => inputs[nextField].focus();

  const focusEmail = () => {
    setIconEmail(require("../../assets/images/icon-email-animated.gif"));
    setIconPassword(images.password);
  };

  const focusPassword = () => {
    setIconEmail(images.email);
    setIconPassword(require("../../assets/images/icon-password-animated.gif"));
  };

  const handleSubmit = async ({ email, password }) => {
    Keyboard.dismiss();
    setLoading(true);

    try {
      const { idToken } = await authApi.login(email, password);

      auth.setUser(idToken);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  if (loading) return <ActivityIndicator visible={loading} />;

  return (
    <Container>
      <Image logo3 source={images.logoDc} />
      <Title caption1>Start learning Success pro content.</Title>
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
  width: 210px;
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
