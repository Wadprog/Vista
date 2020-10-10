import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

//Custom Import
import Screen from "../../components/Screen";
import ListItem from "../../components/ListItem";
import colors from "../../config/colors";
import Icon from "../../components/Icon";
import ListItemSeparator from "../../components/ListItemSeparator";
//custom Item from the account
const accountItems = [
  {
    id: 1,
    title: "My Listings",
    icon: {
      name: "view-headline",
      backgroundColor: colors.danger,
      iconcolor: colors.white,
    },
  },

  {
    id: 2,
    title: "My Message",
    icon: {
      name: "email",
      backgroundColor: colors.danger,
      iconcolor: colors.white,
    },
  },
];
const index = () => {
  const itemsTorender = ({ item }) => {
    return (
      <ListItem
        title={item.title}
        InconComponent={
          <Icon
            name={item.icon.name}
            backgroundColor={item.icon.backgroundColor}
            iconcolor={item.icon.iconcolor}
            size={70}
          />
        }
      />
    );
  };
  return (
    <Screen style={styles.container}>
      <ListItem
        title='Mosh Hamedani'
        subTitle='ProgramingwithMosh@gmail.com'
        image={require("../../assets/mosh.jpg")}
      />

      <FlatList
        style={styles.listContainer}
        data={accountItems}
        keyExtractor={item => item.id}
        renderItem={itemsTorender}
        ItemSeparatorComponent={ListItemSeparator}
      />

      <View>
        <ListItem
          title='Log out'
          InconComponent={
            <Icon
              name='door-open'
              backgroundColor={colors.danger}
              iconcolor={colors.white}
              size={70}
            />
          }
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  listContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
});
export default index;
