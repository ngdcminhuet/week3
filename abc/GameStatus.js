import React from "react";
import { Text, View, StyleSheet } from "react-native";
const winColor = "green";
const loseColor = "red";

function GameStatus(props) {
  return (
    <View style={styles.statusWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Rock, Paper, Scissors</Text>
      </View>
      <View style={styles.infoGame}>
        <View style={styles.result}>
          <Text
            style={
              props.result === "Tie game!"
                ? styles.textResult
                : props.result === "Victory!"
                ? styles.winColor
                : styles.loseColor
            }
          >
            {props.result}
          </Text>
          <Text style={styles.Text}>Game number : {props.totalgame}</Text>
        </View>
        <View style={styles.history}>
          <Text style={styles.Text}>Win : {props.totalWin}</Text>
          <Text style={styles.Text}>Lose : {props.totalLose}</Text>
          <Text style={styles.Text}>Tie : {props.totalTie}</Text>
        </View>
      </View>
    </View>
  );
}

export default GameStatus;
const styles = StyleSheet.create({
  statusWrapper: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
  },
  result: {
    flex: 0.4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoGame: {
    flex: 0.6,
    //justifyContent: "center",
    //alignItems: "center",
  },
  titleWrapper: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
  Text: {
    fontSize: 20,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
  },
  history: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textResult: {
    //color: '',
    fontSize: 25,
    fontWeight: "700",
  },
  winColor: {
    fontSize: 25,
    fontWeight: "700",
    color: "green",
  },
  loseColor: {
    fontSize: 25,
    fontWeight: "700",
    color: "red",
  },
});
