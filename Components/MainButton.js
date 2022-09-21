import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../Constant/Colors";

function MainButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <View style={Styles.button}>
        <Text style={Styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
export default MainButton;
