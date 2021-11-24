import { useFormikContext } from "formik";
import styled from "styled-components";

import ImageInput from "../auth/ImageInput";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  return (
    <Wrapper>
      <ImageInput
        error={errors[name]}
        image={values[name]}
        onChangeImage={(uri) => setFieldValue(name, uri)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  align-items: center;
`;

export default FormImagePicker;
