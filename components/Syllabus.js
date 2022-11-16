import React, { useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Platform,
  Image,
  ScrollView,
  Linking,
  Button,
  Alert,
} from "react-native";
import bg from "../assets/AppBGB.jpg";
import images from "./ImageSyl";
//import syl from "../CSE/CHE110.jpg";

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

function studyMaterial(subURLs, subCode) {
  if (subURLs.length != 0) {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.h2}>Study Materials:</Text>
        <View style={styles.btnContainer}>
          {subURLs.map((item) => {
            return (
              <OpenURLButton key={item.id} url={item.url}>
                {`${subCode} (${parseInt(item.id) + 1})`}
              </OpenURLButton>
            );
          })}
        </View>
      </View>
    );
  }
  return <View></View>;
}

export default function Syllabus({ route, navigation }) {
  const { subCode, subURLs } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <Text style={styles.h2}>{subCode}:</Text>
          {images[subCode].map((item) => {
            return (
              <Image
                source={item.image}
                resizeMode="contain"
                style={styles.syllabusImage}
                key={item.id}
              />
            );
          })}
          {studyMaterial(subURLs, subCode)}
          <View style={styles.empty}></View>
        </ScrollView>
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
    marginBottom: 20,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  btn: {
    margin: 10,
  },
  syllabusImage: {
    width: 350,
    height: 450,
    marginLeft: 5,
    marginBottom: 10,
    //marginTop: -350,
    //marginBottom: -310,
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
    marginTop: 20,
    marginBottom: 20,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  empty: {
    margin: 20,
  },
});
