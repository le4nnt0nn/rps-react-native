import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Player from "./Player";

const weapons = ["rock", "paper", "scissors"];
export default function App() {

  let state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock, Paper, Scissors</Text>
      <View>
        <Player/>
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.btnWeapon}>
          <Text style={styles.btnWeaponTxt}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWeapon}>
          <Text style={styles.btnWeaponTxt}>Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWeapon}>
          <Text style={styles.btnWeaponTxt}>Scissors</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "white",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
  btnBox: {
    flexDirection: "row",
  },
  btnWeapon: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    marginTop: 20,
  },
  btnWeaponTxt: {
    color: "darkgray",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
