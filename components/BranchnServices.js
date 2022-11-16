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

export default function BranchnServices({ navigation }) {
  const handleCSE = () => {
    navigation.navigate("Semesters", { branch: "CSE" });
  };
  const handleME = () => {
    navigation.navigate("Semesters", { branch: "ME" });
  };
  const handlePlace = () => {
    navigation.navigate("Placement");
  };
  const handleContacts = () => {
    navigation.navigate("FacultyContacts");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Text style={styles.h1}>Choose Your Branch</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <Text style={styles.btn} onPress={handleCSE}>
              B.Tech CSE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn} onPress={handleME}>
              B.Tech ME
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.h2}>Other Services:</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <Text style={styles.btn} onPress={handlePlace}>
              Placement Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn} onPress={handleContacts}>
              Faculty Contacts
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
    height: 50,
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
    marginTop: 75,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  h2: {
    fontWeight: Platform.OS == "android" ? "bold" : "regular",
    fontSize: 32,
    marginLeft: 10,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  empty: {
    margin: 20,
  },
});
