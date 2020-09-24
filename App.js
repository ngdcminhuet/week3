import React, { Component } from "react";
import { StyleSheet, Text, View} from "react-native";
import GameStatus from "./abc/GameStatus";
import ButtonGame from "./abc/ButtonGame";
import GameDisplay from "./abc/GameDisplay";
import { CHOICES } from "./abc/constant";
import { randomComputerChoice, getRoundOutcome } from "./abc/logicFunc";

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
    //console.log(foundChoice);
    const computerChoice = randomComputerChoice();
    const result = getRoundOutcome(foundChoice.name, computerChoice.name);
    const gameNum = this.state.totalgame + 1;
    const numLose = this.state.totalLose;
    const numTie = this.state.totalTie;
    const numWin = this.state.totalWin;
    if(result === "Tie game!"){
      //const numTie = this.state.totalTie;
      this.setState({totalTie: numTie+1});
    }
    else if(result === "Victory!"){
      //const numWin = this.state.totalWin;
      this.setState({totalTie: numWin+1});
    }
    else{
      //const numLose = this.state.totalLose;
      this.setState({totalTie: numLose+1});
    }
    this.setState({
      playerChoice: foundChoice,
      computerChoice,
      result,
      totalgame: gameNum,
      /*totalWin: numWin,
      totalLose: numLose,
      totalTie: numTie,*/
    });
  };
  render() {
    //console.log(this.state.playerChoice);
    return (
      <View style={styles.container}>
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
          <GameDisplay playName="Computer" choice={this.state.computerChoice} />
        </View>

        <View style={styles.ButtonGame}>
          <ButtonGame onPressButton={this.onPressButton} choice={CHOICES} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  GameDisplay: {
    flex: 0.4,
    //backgroundColor: 'red'
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonGame: {
    flex: 0.4,
    //backgroundColor: 'yellow',
    justifyContent: "center",
    alignItems: "center",
  },

  GameStatus: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
});
