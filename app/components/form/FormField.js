import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

const FormField = ({ name, onSubmitEditing, onRef, ...rest }) => {
  const {
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    values,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <TextInput
        error={errors[name]}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        onSubmitEditing={onSubmitEditing ? onSubmitEditing : handleSubmit}
        ref={onRef}
        touched={touched[name]}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
