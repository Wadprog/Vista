import React from "react";
import { View, Image, StyleSheet } from "react-native";

//Custom import
import colors from "../../config/colors";
import Text from "../../components/AppText";
import ListItem from "../../components/ListItem";
const index = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red jacket for sale </Text>
        <Text style={styles.price}>$ 100 </Text>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          title='Mosh Hamedani'
          subTitle='5 listing'
          image={require("../../assets/mosh.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },

  price: {
    color: colors.secondary,
    fontWeight: "500",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default index;
