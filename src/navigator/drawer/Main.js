import { View, Text } from "react-native";
import React from "react";
import BottomNavigator from "../bottomtab/BottomNavigator";

export default function Main({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <BottomNavigator />
    </View>
  );
}
