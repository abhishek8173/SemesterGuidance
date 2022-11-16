import React, { useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Platform,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import bg from "../assets/AppBGB.jpg";

// You can import from local files
//import AssetExample from './components/AssetExample';
const studysheet =
  "https://docs.google.com/spreadsheets/d/1H07_-t5GtEKn-AwTTguoPR-AA4ZdG8qIyDeRX0DvaJo/edit?usp=sharing";

const companyList =
  "https://docs.google.com/spreadsheets/d/1XU4V6SSz0B5EC6MFjh4Lo-odvaAPgwMIL5AtMRkwiiQ/edit?usp=sharing";
const TPCdetails =
  "https://docs.google.com/spreadsheets/d/1EJn9hr486e597TARCtclWEP0ErREBG3PQt30C6HQuHI/edit?usp=sharing";
// or any pure javascript modules available in npm
function Material(studysheet) {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.

    //const supported = await Linking.canOpenURL(sheet);
    try {
      await Linking.openURL(studysheet);
    } catch (e) {
      Alert.alert("No URL Found!");
    }
  }, [studysheet]);
  return (
    <TouchableOpacity>
      <Text style={styles.btn} onPress={handlePress}>
        Study Materials
      </Text>
    </TouchableOpacity>
  );
}
function Companies(companyList) {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.

    //const supported = await Linking.canOpenURL(sheet);
    try {
      await Linking.openURL(companyList);
    } catch (e) {
      Alert.alert("No URL Found!");
    }
  }, [companyList]);
  return (
    <TouchableOpacity>
      <Text style={styles.btn} onPress={handlePress}>
        ON Campus Companies
      </Text>
    </TouchableOpacity>
  );
}
function TPC(TPCdetails) {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.

    //const supported = await Linking.canOpenURL(sheet);
    try {
      await Linking.openURL(TPCdetails);
    } catch (e) {
      Alert.alert("No URL Found!");
    }
  }, [TPCdetails]);
  return (
    <TouchableOpacity>
      <Text style={styles.btn} onPress={handlePress}>
        TPC
      </Text>
    </TouchableOpacity>
  );
}
export default function Placement({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Text style={styles.h1}>Placement Services</Text>
        <View style={styles.btnContainer}>
          {TPC(TPCdetails)}
          {Companies(companyList)}
          {Material(studysheet)}
        </View>
        <Text style={styles.note}>
          Students can mail us at 'abhishekpandey19112000@gmail.com' if they
          would like us to add some other materials or company details.
        </Text>
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
    padding: 10,
    height: 70,
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
  note: {
    color: "#cfcfcf",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  empty: {
    margin: 20,
  },
});
