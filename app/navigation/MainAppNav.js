import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//custom imports

import MyAccountScreen from "../screens/MyAccountScreen";
import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name='listing'
        component={ListingScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='addlisting'
        component={ListingEditScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='add' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={MyAccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='face' color={color} size={size} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};

export default TabNavigator;
