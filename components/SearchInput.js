import React, { Component } from "react";
import { TextInput, StyleSheet, View } from "react-native";

export class SearchInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={this.props.placeholder}
          placeholderTextColor="white"
          style={styles.textInput}
s          clearButtonMode="always"
        />
      </View>
    );
  }
}

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#666",
    color: "whitesmoke",
    height: 45,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  textInput: {
    flex: 1,
    color: "white",
  },
});
