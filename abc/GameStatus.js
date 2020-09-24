import React from "react";
import { Text, View, StyleSheet } from "react-native";

function GameStatus(props) {
  return(
    <View style = {styles.statusWrapper}>
      <Text style = {styles.result}>Result {props.result}</Text>
      <Text style = {styles.Text}>Game number : {props.totalgame}</Text>
      <Text style = {styles.Text}>Game win : {props.totalWin}</Text>
      <Text style = {styles.Text}>Game tie : {props.totalTie}</Text>
      <Text style = {styles.Text}>Game lose : {props.totalLose}</Text>
    </View>
  );
}

export default GameStatus;
const styles = StyleSheet.create({
  statusWrapper:{
    justifyContent: "center",
    alignItems: "center",
  },
  result:{
   fontSize: 35,
   fontWeight: '600',
  },
  Text:{
  fontSize: 25,
   fontWeight: '500',
  }
})
