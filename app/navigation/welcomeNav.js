import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//custom imports
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import TabNavigator from "./MainAppNav";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        options={{ headerShown: false }}
        component={Welcome}
      />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='MainApp' component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
