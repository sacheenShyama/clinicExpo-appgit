import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../views/Login";
import Register from "../views/Register";
import Home from "../views/Home";
import { Text, View } from "react-native";
import Parent from "./Parent";

const Router = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FAFAFA",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Register", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
