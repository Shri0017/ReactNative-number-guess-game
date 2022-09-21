import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import {ScreenOrientation} from 'expo'

import MainButton from "../Components/MainButton";
import Colors from "../Constant/Colors";
export default function GameOverScreen(props) {
//  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
   return (
    <View style={Styles.screen}>
      <Text>Game is Over !!</Text>
      <View style={Styles.imageContainer}>
        <Image
          fadeDuration={250}
          source={require("../assets/Success.jpg")}
          // source={{uri:'https://pixabay.com/photos/mountain-landscape-steps-stones-2031539/'}}
          style={Styles.Image}
          resizeMode="cover"
        />
      </View>
      <View>
        <Text style={Styles.resultContainer}>
          Your phone needed 
          <Text style={Styles.highlight}> {props.numberOfRounds}</Text> rounds to
          guess Number <Text style={Styles.highlight}>{props.userNumber}</Text>
        </Text>
      </View>
      <MainButton  onPress={props.restartGame} >RESTART GAME</MainButton>
    </View>
  );
}
const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    overflow: "hidden",
    marginVertical: 20,
  },
  highlight: {
    color: Colors.primary,
    fontSize:20,
    fontStyle:'italic',
  },
  resultContainer:{
    marginHorizontal:20,
    marginVertical:20
  }
});
