import React, { Component } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./Screen/Register";
import RegisterDetailScreen from "./Screen/RegisterDetails";
const Stack = createStackNavigator();
export default class NavigationContainers extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Register"
            options={{ headerShown: false }}
            component={RegisterScreen}
          />
          <Stack.Screen
            name="RegisterDetails"
            component={RegisterDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
