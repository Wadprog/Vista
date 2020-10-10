import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
const index = ({
  name,
  size = 40,
  backgroundColor = colors.secondary,
  iconcolor = colors.white,
  title,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size * 0.5}
        color={iconcolor}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default index;
