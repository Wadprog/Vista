import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

//custom imports
import defaultStyles from "../config/styles";

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("you need to allow me ");
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading iamnge ");
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Remove", "Sure you want to remove this image? ", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        { text: "No" },
      ]);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri ? (
          <MaterialCommunityIcons
            color={defaultStyles.colors.white}
            size={50}
            name='camera'
          />
        ) : (
          <Image source={{ uri: imageUri }} style={styles.image} />
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
    marginRight: 5,
   
  },

  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
