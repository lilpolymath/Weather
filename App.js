import React from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  TextInput,
} from "react-native";
import getImageForWeather from "./utiles/getImageForWeather";
import SearchInput from "./components/SearchInput";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={getImageForWeather("Clear")}
        style={styles.imageContainer}
        imageStyle={styles.image}
      />
      <Text style={(styles.textStyle, styles.largeText)}>Port Harcout</Text>
      <Text style={(styles.textStyle, styles.smallText)}>A bit cloudy</Text>
      <Text style={(styles.textStyle, styles.largeText)}>24°</Text>

      <SearchInput placeholder="Search any city" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 20,
  },
  textInput: {
    backgroundColor: "#666",
    color: "whitesmoke",
    height: 45,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
});
