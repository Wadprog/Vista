import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, View, Text, Image } from "react-native";
import Welcome from "./app/screens/Welcome";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import Button from "./app/components/AppButton";
import ListItem from "./app/components/ListItem";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import Login from "./app/screens/Login";
import AppTextInput from "./app/components/AppTextInput";
import Picker from "./app/components/Picker";
import Screen from "./app/components/Screen";
import Catalog from "./app/components/Catalog";
import ImageInput from "./app/components/ImageInput";
import * as ImagePicker from "expo-image-picker";
import ListingEditScreen from "./app/screens/ListingEditScreen";

import myTheme from "./app/navigation/navigationTheme";
import WelcomeNav from "./app/navigation/welcomeNav";
import MainAppNav from "./app/navigation/MainAppNav";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Post from "./app/components/Post"
const App = () => {
  return (
    <Screen>
      <Post postDetails={{ date:'9/1/2010', description:' Lorem Itsum lorea vera palabra', image:require('./app/assets/mosh.jpg')}} user ={{name : 'Ricardo ', image:require('./app/assets/mosh.jpg')}}/>
    </Screen>
    // <NavigationContainer theme={myTheme}>
    //   <WelcomeNav />
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe4e1",
    padding: 20,
    marginTop: 100,
  },
  catalog: {
    flexDirection: "row",
  },
});

export default App;
