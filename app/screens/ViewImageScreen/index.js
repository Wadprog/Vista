import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Customs imports
import colors from "../../config/colors";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color={colors.white} size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          color={colors.white}
          size={30}
        />
      </View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require("../../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default index;
