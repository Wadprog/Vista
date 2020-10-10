import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";

//Custom import
import colors from "../config/colors";
import Text from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  image,
  InconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
  style
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container, style]}>
          {InconComponent}
          {image && <Image style={styles.image} source={image} />}

          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title} </Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },

  subTitle: {
    color: colors.medium,
  },
});
export default ListItem;
