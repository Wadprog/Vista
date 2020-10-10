import React, { useState, useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

//Custom Elements
import Screen from "../components/Screen";
import * as FormData from "../components/Appforms";
import ImagePicker from "../components/Appforms/ImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please selectt at least 1 image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "CArs",
    value: 3,
  },
];
const ListingEditScreen = () => {
  const location = useLocation();
  return (
    <Screen style={styles.screen}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <FormData.Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={values => console.log(location)}
        validationSchema={validationSchema}
      >
        <ImagePicker name='images' />
        <FormData.FormField maxLength={255} name='title' placeholder='Title' />

        <FormData.FormField
          name='price'
          placeholder='Price'
          autoCapitalize='none'
          autoCrorrect={false}
          keyboardType='decimal-pad'
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

        <FormData.SubmitBtn title='Post' />
      </FormData.Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  catalog: {
    flexDirection: "row",
  },
});
export default ListingEditScreen;
