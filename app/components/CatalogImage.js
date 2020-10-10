import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

//custom imports
import defaultStyles from "../config/styles";

const CatalogImage = ({ image, onPress, style }) => {
  const { uri } = image;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        {uri != undefined && uri ? (
          <Image source={{ uri: uri }} style={styles.image} />
        ) : (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: defaultStyles.colors.light,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default CatalogImage;
