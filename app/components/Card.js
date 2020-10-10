import React from "react";
import { View, Image, StyleSheet } from "react-native";

//Custom imports
import colors from "../config/colors";
import Text from "./AppText";

const index = ({ image, title, subtitle, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}> {title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: "hidden",
  },

  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "700",
  },
  title: {
    marginBottom: 7,
    fontWeight: "500",
  },
});

export default index;
