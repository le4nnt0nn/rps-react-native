import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Player from "./Player";

const weapons = ["rock", "paper", "scissors"];
export default function App() {

  const startGame = () => {
    return(
      <View style={styles.playerWrapper}>
        <Player weapon={weapons[Math.floor(Math.random() * (weapons.length))]} />
      </View>
    )
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock, Paper, Scissors</Text>
      <TouchableOpacity style={styles.btnStart} onPress={() => startGame()}>
        <Text style={styles.btnStartTxt}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3381ff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "white",
    fontSize: 30,
    padding: 10,
    fontWeight: "bold",
  },
  playerWrapper: {
    flexDirection: "row",
  },
 
  btnWeapon: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderRadius: 50,
  },
  btnStart: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderRadius: 50,
  },
  btnStartTxt: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
