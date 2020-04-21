import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./Screen/RegisterScreen";
import RegisterDetailScreen from "./Screen/RegisterDetailScreen";
const Stack = createStackNavigator();
export default function App() {
  return MyStack();
}
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={RegisterScreen}
        />
        <Stack.Screen name="RegisterDetails" component={RegisterDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
