import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Player from "./Player";

const weapons = ["rock", "paper", "scissors"];
const initButtons = ["Gooo", "Do it", "You Can Win", "Come on", "Try it Again", "You are good", "Just Play"]
export default function App() {
  const [startClicked, setStartClicked] = useState(null);

  const startGame = () => {
    console.log("activatedGame");
    setStartClicked(!startClicked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock, Paper, Scissors</Text>
      <View style={styles.playerWrapper}>
        <Player weapon={weapons[Math.floor(Math.random() * weapons.length)]} />
      </View>
      <TouchableOpacity style={styles.btnStart} onPress={startGame}>
      <Text style={styles.btnStartTxt}>{initButtons[Math.floor(Math.random() * initButtons.length)]}</Text>
      </TouchableOpacity>
      <View style={styles.resultsWrapper}>
        <TouchableOpacity>
          <Text style={styles.resultsTxt}>Human</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.resultsTxt}>COM</Text>
        </TouchableOpacity>
      </View>
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
  btnStart: {
    backgroundColor: "white",
    textAlign: "center",
    width: 200,
    height: 50,
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderRadius: 50,
  },
  btnStartTxt: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  resultsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  resultsTxt: {
    marginTop: 30,
    marginLeft: 80,
    marginRight: 80,
    fontSize: 18,
    fontWeight: "bold",
  }
});
