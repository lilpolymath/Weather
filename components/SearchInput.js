import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { PropTypes } from "prop-types";
export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: "",
    };
  }

  handleLocationChange = currentLocation => {
    this.setState({ currentLocation: currentLocation });
  };

  handleLocationUpdate = () => {
    const { onSubmit } = this.props;
    const { currentLocation } = this.state;
    if (!currentLocation) return;
    onSubmit(currentLocation);
    this.setState({ currentLocation: "" });
  };

  render() {
    const { placeholder } = this.props;
    const { currentLocation } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={currentLocation}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleLocationChange}
          onSubmitEditing={this.handleLocationUpdate}
        />
      </View>
    );
  }
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
SearchInput.defaultProps = {
  placeholder: "",
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: "#666",
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: "white",
  },
});
