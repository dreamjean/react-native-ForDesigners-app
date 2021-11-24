import { useFormikContext } from "formik";

import Button from "../Button";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <Button upper onPress={handleSubmit} {...{ title }} marginTop={32} />;
};

export default SubmitButton;
