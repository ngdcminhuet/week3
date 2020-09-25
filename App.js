import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import GameStatus from "./abc/GameStatus";
import ButtonGame from "./abc/ButtonGame";
import GameDisplay from "./abc/GameDisplay";
import { CHOICES } from "./abc/constant";
import {
  randomComputerChoice,
  getRoundOutcome,
  getNumResult,
} from "./abc/logicFunc";
import Constants from "expo-constants";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: {},
      computerChoice: {},
      result: "",
      totalgame: 0,
      totalLose: 0,
      totalWin: 0,
      totalTie: 0,
    };
  }
  onPressButton = (playerChoice) => {
    const foundChoice = CHOICES.find((choice) => choice.name === playerChoice);

    const computerChoice = randomComputerChoice();
    const result = getRoundOutcome(foundChoice.name, computerChoice.name);
    const gameNum = this.state.totalgame + 1;
    const numLose = this.state.totalLose;
    const numWin = this.state.totalWin;
    const numTie = this.state.totalTie;
    const a = getNumResult(result, numLose, numTie, numWin);
    console.log(a);
    this.setState({
      playerChoice: foundChoice,
      computerChoice,
      result,
      totalgame: gameNum,
      totalWin: a[0],
      totalLose: a[1],
      totalTie: a[2],
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/backGround.jpg")}
          style={styles.image}
        >
          <View style={styles.GameStatus}>
            <GameStatus
              result={this.state.result}
              totalgame={this.state.totalgame}
              totalTie={this.state.totalTie}
              totalWin={this.state.totalWin}
              totalLose={this.state.totalLose}
            />
          </View>

          <View style={styles.GameDisplay}>
            <GameDisplay playName="Player" choice={this.state.playerChoice} />
            <GameDisplay
              playName="Computer"
              choice={this.state.computerChoice}
            />
          </View>

          <View style={styles.ButtonGame}>
            <ButtonGame onPressButton={this.onPressButton} choice={CHOICES} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: "#fff",
    //justifyContent: "center",
    //alignItems: "center",
  },

  GameDisplay: {
    flex: 0.4,
    //backgroundColor: 'red'
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //borderWidth: 2,
    borderColor: "grey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ButtonGame: {
    flex: 0.3,
    //backgroundColor: 'yellow',
    justifyContent: "center",
    alignItems: "center",
  },

  GameStatus: {
    marginTop: Constants.statusBarHeight,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: 'red',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
