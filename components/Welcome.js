import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Platform,
} from "react-native";
import bg from "../assets/AppBGW.jpg";

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

export default function Welcome({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("App");
    }, 4000);
  });
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Text style={styles.paragraph}>Lovely Professional University</Text>
        <Text style={styles.h1}>Semester</Text>
        <Text style={styles.h2}>Guidance</Text>
        <ActivityIndicator style={styles.activity} size="large" color="#fff" />
        <Text style={styles.footer}>Developers:</Text>
        <Text style={styles.footer}>
          Pankaj Kumar, Abhishek Pandey, Kartikey Gautam
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: "#FFA438",
  },
  paragraph: {
    margin: -15,
    marginTop: 150,
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
  },
  image: {
    flex: 1,
    //marginTop: Platform.OS == 'android' ? 0 : 10,
    //justifyContent: 'center',
    //padding: 10,
  },
  h1: {
    fontWeight: Platform.OS == "android" ? "bold" : "regular",
    fontSize: 64,
    textAlign: "center",
  },
  h2: {
    fontWeight: Platform.OS == "android" ? "bold" : "regular",
    fontSize: 48,
    textAlign: "center",
    marginTop: -20,
  },
  activity: {
    marginBottom: 100,
    marginTop: Platform.OS == "android" ? 320 : 300,
  },
  footer: {
    fontSize: 14,
    color: "#888888",
    textAlign: "center",
    marginBottom: 15,
  },
});
