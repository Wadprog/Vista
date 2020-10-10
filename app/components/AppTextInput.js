import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//custom imports

import defaultStyles from "../config/styles";
const AppTextInput = ({ iconnName, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {iconnName && (
        <MaterialCommunityIcons
          style={styles.icon}
          color={defaultStyles.colors.medium}
          size={20}
          name={iconnName}
        />
      )}
      <TextInput {...otherProps} style={defaultStyles.text} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    width: "100%",
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginLeft: 5,
    marginRight: 7,
  },
 
});

export default AppTextInput;
