import React from "react";
import { Formik } from "formik";

const Form = ({ validationSchema, initialValues, onSubmit, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};
export default Form;
