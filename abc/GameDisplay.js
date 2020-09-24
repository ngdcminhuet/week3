import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function GameDisplay(props) {
  return (
    <View style={styles.column}>
      <Text>{props.playName}</Text>
      <Image source = {{uri : props.choice.uri}} style={styles.image}></Image>
      <Text>Chosen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    height: 150,
    width: 150
  }
});
export default GameDisplay;
