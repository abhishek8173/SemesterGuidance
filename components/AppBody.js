import * as React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BranchnServices from "./BranchnServices";
import Semesters from "./Semesters";
import Subjects from "./Subjects";
import Syllabus from "./Syllabus";
import Placement from "./Placement";
import FacultyContacts from "./FacultyContacts";

export default function AppBody({ navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#bc7c2f",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Home"
        component={BranchnServices}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Semesters" component={Semesters} />
      <Stack.Screen name="Subjects" component={Subjects} />
      <Stack.Screen name="Syllabus" component={Syllabus} />
      <Stack.Screen name="Placement" component={Placement} />
      <Stack.Screen name="FacultyContacts" component={FacultyContacts} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    height: 128,
    width: 128,
  },
});
