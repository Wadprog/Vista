import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

//Custom Imports
import colors from "../../config/colors";
import Button from "../../components/AppButton";
import Text from "../../components/AppText";

//Components>

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo.png")}
        />
        <Text style={styles.text}>L'union fait la force </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title='login' onPress={() => navigation.navigate("Login")} />
        <Button title='register' variant='secondary' />
      </View>
    </ImageBackground>
  );
};

//Styles>

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 120,
    height: 150,
  },
  text:{
    color:colors.white
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default Welcome;
