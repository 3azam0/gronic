import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen} from "../screens/login/login";
import {TouchableOpacity,View} from 'react-native'
import {  Icon,  Layout, Text } from "@ui-kitten/components";

const { Navigator, Screen } = createStackNavigator();

export const authStack = () => (
  <Navigator initialRouteName="Login" >
    <Screen name="Login" component={LoginScreen} options={{
    headerTransparent: true,
    
    headerRight:()=> (
      <TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            paddingLeft: 20
          }}
        >
          <Icon
            name='heart'
            size={20}
            color='red'
          />
        </View>
      </TouchableOpacity>
    ),
    headerRightContainerStyle: {
   
          paddingRight: 20,
          paddingVertical: 12
        
      
    }
  }} />
    {
      //<Screen name="SignUp" component={SignUp} />
    }
  </Navigator>
);
