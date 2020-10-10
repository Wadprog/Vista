import React, { useState } from "react";
import { View, StyleSheet, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//custom imports
import defaultStyles from "../config/styles";
import Text from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PickerItem from "./PickerItem";

const Picker = ({
  selectedCategory,
  data,
  placeholder,
  iconnName,
  setSelectedCategory,
  ...otherProps
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {iconnName && (
            <MaterialCommunityIcons
              style={styles.icon}
              color={defaultStyles.colors.medium}
              size={20}
              name={iconnName}
            />
          )}
          {selectedCategory ? (
            <Text>{selectedCategory.title}</Text>
          ) : (
            <Text {...otherProps} style={defaultStyles.text}>
              {placeholder}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType='slide' visible={modalVisible}>
        <Button title='close' onPress={() => setModalVisible(false)} />
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <PickerItem
              title={item.title}
              onPress={() => {
                setModalVisible(false);
                setSelectedCategory(item);
              }}
            />
          )}
        />
      </Modal>
    </>
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

export default Picker;
