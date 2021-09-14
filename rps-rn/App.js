import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Player from "./Player";

const weapons = ["rock", "paper", "scissors"];
export default function App() {
 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock, Paper, Scissors</Text>
      <View style={styles.playerWrapper}>
        <Player weapon={weapons[Math.floor(Math.random() * (weapons.length))]} />
      </View>
      <View>
        <Text style={styles.winner}>winner</Text>
      </View>
      <TouchableOpacity style={styles.btnStart}>
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
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
  playerWrapper: {
    flexDirection: "row",
  },
  btnBox: {
    flexDirection: "row",
  },
  btnWeapon: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderRadius: 50,
  },
  btnWeaponTxt: {
    color: "darkgray",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  winner: {
    color: "#750901",
    fontWeight: "bold",
    fontSize: 20,
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
