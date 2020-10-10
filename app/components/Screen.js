import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constant from "expo-constants";
const index = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: Constant.statusBarHeight,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
export default index;
