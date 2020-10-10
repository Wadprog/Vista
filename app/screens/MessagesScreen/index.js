import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
const initialmessages = [
  {
    id: 0,
    title: "t1",
    subTitle: "something good",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 1,
    title: "t2",
    subTitle: "something good",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t3",
    subTitle: "something good",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "t4",
    subTitle: "something good",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "t5",
    subTitle: "something good",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 5,
    title: "t6",
    subTitle: "something good",
    image: require("../../assets/mosh.jpg"),
  },
];

import ListItem from "../../components/ListItem";
import Screen from "../../components/Screen";
import LisItemSeparator from "../../components/ListItemSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";

const index = () => {
  const [messages, setMessages] = useState(initialmessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    console.log(message);
    const newMassageArray = messages.filter(msg => msg.id !== message.id);
    setMessages(newMassageArray);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={messe => messe.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            subTitle={item.subTitle}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={LisItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "t4",
              subTitle: "something good",
              image: require("../../assets/mosh.jpg"),
            },
            {
              id: 4,
              title: "t5",
              subTitle: "something good",
              image: require("../../assets/mosh.jpg"),
            },
            {
              id: 5,
              title: "t6",
              subTitle: "something good",
              image: require("../../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({});

export default index;
