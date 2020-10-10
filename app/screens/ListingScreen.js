import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

//Custom imports
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listItems = [
  {
    title: "Red Jacket for sale",
    subTitle: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    title: "Couch in great condition",
    subTitle: 1000,
    image: require("../assets/couch.jpg"),
  },
  {
    title: "Great Chair with four legs",
    subTitle: 1000,
    image: require("../assets/chair.jpg"),
  },
];
const index = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listItems}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            image={item.image}
            title={item.title}
            subtitle={"$" + item.subTitle}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    paddingHorizontal: 10,
  },
  card: {
    marginBottom: 20,
  },
});
export default index;
