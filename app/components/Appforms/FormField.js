import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import FormError from "./FormError";

const FormField = ({ name, ...otherProps }) => {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      <FormError errorMsg={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
