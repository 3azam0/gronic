import React from 'react';
import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerStack } from "./drawerStack";
import { Screen } from "../components/screen/screen";
import {authStack} from './authStack'
function Details() {
  return (
    <Screen>
      <Text>fdfdfdfd</Text>
    </Screen>
  );
}

export function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"DrawerStack"} headerMode="none" >
        <Stack.Screen name="authStack" component={authStack} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  style: { flex: 1, justifyContent: "center", alignItems: "center" },
});
const Stack = createStackNavigator();
