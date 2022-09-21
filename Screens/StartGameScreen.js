import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import Card from "../Components/Card";
import Input from "../Components/Input";
import MainButton from "../Components/MainButton";
import NumberContainer from "../Components/NumberContainer";
import Colors from "../Constant/Colors";

export default function StartGameScreen(props) {
  const [enteredValue, SetEnteredValue] = useState("");
  const [confirmed, SetConfirmed] = useState(false);
  const [selectedValue,SetSelectedValue] = useState('');

  const numberInputHandler = (inputText) => {
    SetEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    SetEnteredValue("");
    SetConfirmed(false);
  };

  const confirmHandler = () => {
      const choosenNumber =parseInt(enteredValue);
      if( isNaN(choosenNumber)|| choosenNumber<=0 || choosenNumber>99)
      {
        Alert.alert('Invalid Number','Number has to be a number between 1 to 99',[{text:'Okay',style:'destructive',onPress:resetHandler}])
        return;
      }
      SetConfirmed(true);
      SetSelectedValue(choosenNumber);
      SetEnteredValue('');
      Keyboard.dismiss();
  };

  let confirmOutput;

  if(confirmed){
      confirmOutput=
      <Card style={Styles.summaryContainer}>
          <Text>Your Selected</Text>
          <NumberContainer>{selectedValue}</NumberContainer>
          <MainButton onPress={props.onStartGame.bind(this,selectedValue)}>START GAME</MainButton>
      </Card>
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={Styles.screen}>
        <Text style={Styles.title}>Start a New Game !!</Text>
        <Card style={Styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={Styles.input}
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={Styles.buttonContainer}>
            <View style={Styles.button}>
              <Button
                title="Reset"
                onPress={resetHandler}
                color={Colors.accent}
              />
            </View>
            <View style={Styles.button}>
              <Button
                title="Confirm"
                onPress={confirmHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    width: "41%",
  },
  input: {
    width: "50%",
    textAlign: "center",
  },
  summaryContainer:{
      marginTop:20,
      alignItems:'center'
  }
});
