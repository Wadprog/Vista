import React, { useRef } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

//Customs Imports
import ImageInput from "./ImageInput";

const Catalog = ({ imageUris = [], onAddImage, style, onRemoveImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={[styles.container, style]}>
          {imageUris.map((uri, idx) => (
            <ImageInput
              key={idx}
              imageUri={uri}
              style={{ marginHorizontal: 2 }}
              onChangeImage={() => onRemoveImage(uri)}
            />
          ))}

          <ImageInput onChangeImage={onAddImage} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
export default Catalog;
