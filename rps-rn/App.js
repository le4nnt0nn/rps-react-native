import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Player from "./Player";

const weapons = ["rock", "paper", "scissors"];
export default function App() {
  const selectedWeapon = (weapon) => {
    Player.weapon = weapons[1];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock, Paper, Scissors</Text>
      <View style={styles.playerWrapper}>
        <Player weapon={"rock"} />
        <Player weapon={weapons[2]} />
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.btnWeapon} onPress={() => weapons[0]}>
          <Text style={styles.btnWeaponTxt}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWeapon} onPress={() => weapons[1]}>
          <Text style={styles.btnWeaponTxt}>Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWeapon} onPress={() => weapons[2]}>
          <Text style={styles.btnWeaponTxt}>Scissors</Text>
        </TouchableOpacity>
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
