import React from "react";
import { StyleSheet } from "react-native";

import Text from "../AppText";
import colors from "../../config/colors";

const FormError = ({ visible, errorMsg }) => {
  if (!errorMsg || !visible) return null;
  return (
    <>
      <Text style={styles.error}>{errorMsg}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

export default FormError;
