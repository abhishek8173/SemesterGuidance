import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Constants from 'expo-constants';
//import bg from './assets/AppBGW.jpg';

// You can import from local files
import Welcome from "./components/Welcome";
import AppBody from "./components/AppBody";

// or any pure javascript modules available in npm

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="App"
          component={AppBody}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    paddingTop: 20,
    backgroundColor: "#FFA438",
  },
});
