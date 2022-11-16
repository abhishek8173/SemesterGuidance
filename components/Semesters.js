import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from "react-native";
import bg from "../assets/AppBGB.jpg";

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

export default function Semesters({ route, navigation }) {
  const { branch } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Text style={styles.h1}>Semester</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <Text
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Subjects", {
                  Semester: 1,
                  Branch: branch,
                });
              }}
            >
              Semester 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Subjects", {
                  Semester: 2,
                  Branch: branch,
                });
              }}
            >
              Semester 2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Subjects", {
                  Semester: 3,
                  Branch: branch,
                });
              }}
            >
              Semester 3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Subjects", {
                  Semester: 4,
                  Branch: branch,
                });
              }}
            >
              Semester 4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Subjects", {
                  Semester: 5,
                  Branch: branch,
                });
              }}
            >
              Semester 5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Subjects", {
                  Semester: 6,
                  Branch: branch,
                });
              }}
            >
              Semester 6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Subjects", {
                  Semester: 7,
                  Branch: branch,
                });
              }}
            >
              Semester 7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Subjects", {
                  Semester: 8,
                  Branch: branch,
                });
              }}
            >
              Semester 8
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.empty}></View>
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
  btnContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btn: {
    fontSize: 24,
    fontWeight: "bold",
    width: 250,
    height: 40,
    color: "#fff",
    backgroundColor: "rgba(128, 128, 255, 0.4)",
    borderRadius: 10,
    borderColor: "rgba(64, 64, 255, 1)",
    borderWidth: 1,
    textAlign: "center",
    textAlignVertical: "center",
  },
  image: {
    flex: 1,
    //marginTop: Platform.OS == 'android' ? 0 : 10,
    //justifyContent: 'center',
    //padding: 10,
  },
  h1: {
    fontWeight: Platform.OS == "android" ? "bold" : "regular",
    fontSize: 36,
    marginLeft: 10,
    marginTop: 20,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  empty: {
    margin: 20,
  },
});
