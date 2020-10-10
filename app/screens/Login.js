import React from "react";
import * as Yup from "yup";
import { Button, Image, StyleSheet, Text } from "react-native";

//Custom Elements
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import * as FormData from "../components/Appforms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Login = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <FormData.Form
        initialValues={{ email: "", password: "" }}
        onSubmit={() => navigation.navigate("MainApp")}
        validationSchema={validationSchema}
      >
        <FormData.FormField
          name='email'
          placeholder='Email'
          iconnName='email'
          autoCapitalize='none'
          autoCrorrect={false}
          keyboardType='email-address'
          textContentType='emailAddress'
        />

        <FormData.FormField
          name='password'
          placeholder='Password'
          iconnName='lock'
          autoCapitalize='none'
          autoCrorrect={false}
          keyboardType='email-address'
          textContentType='password'
          secureTextEntry
        />
        <AppButton
          title='Login'
          onPress={() => navigation.navigate("MainApp")}
        />
        {/* <FormData.SubmitBtn title='Login' /> */}
      </FormData.Form>
      <Text>No account click <Button title="here" onPress={()=> navigation.navigate('welcome')}/> to create one</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
  },
  image: {
    width: 130,
    height: 160,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default Login;
