import React from "react";
import { View, StyleSheet } from "react-native";

//custom imports

import color from "../config/colors";

const index = () => {
  return <View style={styles.separator}></View>;
};
const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: color.light,
  },
});
export default index;
