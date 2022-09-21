import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// import * as Font from "expo-font";
// import AppLoading from "expo";

import Header from "./Components/Header";
import GameOverScreen from "./Screens/GameOverScreen";
import GameScreen from "./Screens/GameScreen";
import StartGameScreen from "./Screens/StartGameScreen";

// const featchFonts = () => { 
//   return Font.loadAsync({
//     "open-sans": require("./assets/fonts/"),
//     "open-sans-ilatic": require("./assets/fonts/OpenSans-Italic.ttf"),
//   });
// }; 

export default function App() {
  const [userNumber, SetUserNumber] = useState("");
  const [guessRounds, SetGuessRounds] = useState(0);
  // const [dataLoaded, SetDataLoaded] = useState(false);
  
  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={featchFonts}
  //       onFinish={() => {
  //         SetDataLoaded(true);
  //       }}
  //       onError={(err)=>{console.log(err)}}
  //     />
  //   );
  // }

  const startGameHandler = (selectedNumber) => {
    SetUserNumber(selectedNumber);
    SetGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    SetGuessRounds(numOfRounds);
  };

  const configureNewGameHandler = () => {
    SetGuessRounds(0);
    SetUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        numberOfRounds={guessRounds}
        userNumber={userNumber}
        restartGame={configureNewGameHandler}
      />
    );
  }
  return (
    <View style={Styles.screen}>
      <Header />
      {content}
    </View>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
