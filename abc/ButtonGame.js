import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {CHOICES} from './constant';

/*const CHOICES = [
  {
    name: "Rock",
    uri: "http://pngimg.com/uploads/stone/stone_PNG13622.png",
  },
  {
    name: "Paper",
    uri: "https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png",
  },
  {
    name: "Scissors",
    uri:
      "http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png",
  },
];*/
//const choice = props.CHOICES;
function ButtonGame(props) {
  return (
    <View>
      {CHOICES.map((items) => {
        return (
          <TouchableOpacity key = {items.name} style={styles.button} onPress = { () => props.onPressButton(items.name) }>
            <Text style = {styles.text}>{items.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "pink",
    marginVertical: 15,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
      color: 'white',
      fontSize:20,
      fontWeight : '600'
  }
});
export default ButtonGame;
