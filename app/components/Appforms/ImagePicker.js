import React from "react";
import { useFormikContext } from "formik";

//Custom Imports
import Catalog from "../Catalog";
import FormError from "./FormError";

const ImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const ImageUris = values[name];

  const handleAdd = uri => {
    setFieldValue(name, [...ImageUris, uri]);
  };

  const handleRemove = uri => {
    setFieldValue(
      name,
      ImageUris.filter(imageUri => imageUri !== uri)
    );
  };

  return (
    <>
      <Catalog
        imageUris={ImageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <FormError errorMsg={errors[name]} visible={touched[name]} />
    </>
  );
};

export default ImagePicker;
