import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../Components/Card";
import NumberContainer from "../Components/NumberContainer";
import MainButton from "../Components/MainButton";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (value,numberOfRound) => (
  <View key={value} style={Styles.listItem}>
    <Text>#{numberOfRound}</Text>
    <Text>{value}</Text>
    
  </View>
);

function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, SetCurrnetGuess] = useState(initialGuess);
  const [pastGuess, SetPastGuess] = useState([initialGuess]);
 
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(pastGuess.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie !!", "You know this is Wrong...", [
        { text: "Sorry!!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    SetCurrnetGuess(nextNumber);
    SetPastGuess((currentguess) => [nextNumber, ...currentguess]);
  };
  return (
    <View style={Styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={Styles.card}>
        <MainButton
          onPress={() => {
            nextGuessHandler("lower");
          }}
        >
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton
          onPress={() => {
            nextGuessHandler("greater");
          }}
        >
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>

      <View style={Styles.list}>
      <ScrollView>{pastGuess.map( (guess,index) => renderListItem(guess,pastGuess.length - index))}</ScrollView>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  listItem:{
    borderColor:'black',
    padding: 15,
    marginVertical:10,
    backgroundColor:'white',
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-between'
    },
    list:{
      flex: 1,
      width: '80%',

    }
});
export default GameScreen;
