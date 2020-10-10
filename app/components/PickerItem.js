import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const PickerItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PickerItem;
