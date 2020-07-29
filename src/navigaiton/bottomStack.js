import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, StyleSheet } from "react-native";

import Screen from "../components/screen/screen";

import { WelcomeScreen } from "../screens";
const Tab = createBottomTabNavigator();
function TabADetailsScreen({ navigation }) {
  return (
    <Screen navCofig={{ title: "FFFFFFF", subtitle: "sssss" }}>
      <Text>fdfdfdfd</Text>
    </Screen>
  );
}
function TabBScreen() {
  return (
    <Screen navCofig={{ title: "tab B", subtitle: "sssss" }}>
      <Text style={{ fontSize: 25, color: "white" }}>TEAB BBBBBBBBBBB</Text>
    </Screen>
  );
}
export function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "WelcomeScreen") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle";
          } else if (route.name === "TabB") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle";
          }
          return <Text>ICON</Text>;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Tab.Screen name="TabB" component={TabBScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  style: { flex: 1, justifyContent: "center", alignItems: "center" },
});
