import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {CHOICES} from './constant';


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
    backgroundColor: "#00c6d1",
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
