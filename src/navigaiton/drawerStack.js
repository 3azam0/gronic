import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomStack } from "./bottomStack";

const Drawer = createDrawerNavigator();

export function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={Draw}>
      <Drawer.Screen name="Home" component={BottomStack} />
    </Drawer.Navigator>
  );
}

export const Row = ({ text, goto, props }) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate(goto)}>
      <Text style={styles.drawerText}>{text}</Text>
      <View style={styles.drawerLine} />
    </TouchableOpacity>
  );
};

export const Draw = props => {
  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          height: 200,
          backgroundColor: "black",
          width: "100%",
          paddingHorizontal: 40,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 19 }}>sdsdsdsdsdsd</Text>
        </View>
      </View>
      <ScrollView>
        <Row text={"Sign Up"} props={props} goto={"SignUp"} />
        <Row text={"Sign In"} props={props} goto={"Login"} />
        <Row text={"Sign Up UI KITTEN"} props={props} goto={"SignUpKitten"} />
        <Row text={"Market Place"} props={props} goto={"test"} />
        <Row text={"About Us"} props={props} goto={"test"} />
        <Row text={"Rate us"} props={props} goto={"test"} />
        <Row text={"Contact Us"} props={props} goto={"test"} />
        <Row text={"Returns and Refunds"} props={props} goto={"test"} />
        <Row text={"Feedback to Improve"} props={props} goto={"test"} />
        <Row text={"Terms & Conditions"} props={props} goto={"test"} />
        <TouchableOpacity>
          <Text style={styles.drawerText}>LOG OUT</Text>
          <View style={styles.drawerLine} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerText: {
    color: "gray",
    fontSize: 18,
    marginVertical: 15,
    alignSelf: "center",
  },
  drawerLine: { backgroundColor: "gray", height: 0.5, width: "100%" },
});
