import React, { useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Platform,
  TouchableOpacity,
  FlatList,
  Linking,
  Alert,
} from "react-native";
import bg from "../assets/AppBGB.jpg";
import CSE_subjects from "../data/CSE_subjects.json";
import ME_subjects from "../data/ME_subjects.json";
import CSE_Sheets from "../data/CSE_Sheets.json";
import ME_Sheets from "../data/ME_Sheets.json";

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
function PPTs(sheet) {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.

    //const supported = await Linking.canOpenURL(sheet);
    try {
      await Linking.openURL(sheet);
    } catch (e) {
      Alert.alert("No URL Found!");
    }
  }, [sheet]);
  return (
    <Text style={styles.link} onPress={handlePress}>
      Click here for class PPTs and PDFs.
    </Text>
  );
}

export default function Subjects({ route, navigation }) {
  const { Semester, Branch } = route.params;
  const subjects = Branch == "CSE" ? CSE_subjects : ME_subjects;
  const sheet = Branch == "CSE" ? CSE_Sheets[Semester] : ME_Sheets[Semester];
  const subs = subjects[Semester];
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Text
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Syllabus", {
            subCode: item.code,
            subURLs: item.urls,
          });
        }}
      >
        {item.code}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Text style={styles.h1}>Subjects</Text>
        <FlatList
          data={subs}
          renderItem={renderItem}
          keyExtractor={(item) => {
            return item.id;
          }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        />
        {PPTs(sheet)}
        <Text style={styles.note}>
          Mail us your teacher ID at 'abhishekpandey19112000@gmail.com' to get
          editor access.
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
    height: 40,
    color: "#fff",
    backgroundColor: "rgba(128, 128, 255, 0.4)",
    borderRadius: 10,
    overflow: "hidden",
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
  link: {
    color: "blue",
    backgroundColor: "rgba(207, 207, 207, 0.5)",
    paddingLeft: 10,
    marginRight: 10,
    fontSize: 20,
    borderRadius: 10,
    overflow: "hidden",
    fontWeight: "bold",
    marginLeft: 10,
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
