import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Player from "./Player";
import human from "./assets/icons/human-icon.png";
import robot from "./assets/icons/robot-icon.png";

// weapons in game
const weapons = ["rock", "paper", "scissors"];

// phrases for play button
const initButtons = [
  "Gooo",
  "Do it",
  "You Can Win",
  "Come on",
  "Try it Again",
  "You are good",
  "Just Play",
];
export default function App() {
  const [startClicked, setStartClicked] = useState(false);
  const [scoreHuman, setScoreHuman] = useState(null);
  const [scoreCom, setScoreCom] = useState(null);

  // modify startClicked state
  const startGame = () => {
    console.log("startedGame");
    setStartClicked(!startClicked);
  };

  // this function set Score to Human
  const addScoreH = (sc) => {
    console.log("addedScoreHuman");
    sc = sc + 1;
    setScoreHuman(sc);
  };

  // this function set Score to COM
  const addScoreC = (sc) => {
    console.log("addedScoreCom");
    sc = sc + 1;
    setScoreCom(sc);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock, Paper, Scissors</Text>
      <View style={styles.playerWrapper}>
        {/* appears random weapon on the screen*/}
        <Player weapon={weapons[Math.floor(Math.random() * weapons.length)]} />
      </View>
      <TouchableOpacity style={styles.btnStart} onPress={() => startGame()}>
        <Text style={styles.btnStartTxt}>
          {/* random motivational phrases */}
          {initButtons[Math.floor(Math.random() * initButtons.length)]}
        </Text>
      </TouchableOpacity>
      <View style={styles.resultsWrapper}>
        <TouchableOpacity onPress={() => addScoreH(scoreHuman)}>
          <View style={styles.resultsWrapperContainer}>
            <Image style={styles.playerIcon} source={human}></Image>
            <Text style={styles.resultTxtPoint}>{scoreHuman}</Text>
            {/* if Human score is 5 then victory txt apppears */}
            {scoreHuman === 5 ? (
              <Text style={styles.victoryTxt}>Human Wins ! </Text>
            ) : null}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addScoreC(scoreCom)}>
          <View style={styles.resultsWrapperContainer}>
            <Image style={styles.playerIcon} source={robot}></Image>
            <Text style={styles.resultTxtPoint}>{scoreCom}</Text>
            {/* if COM score is 5 then victory txt apppears */}
            {scoreCom === 5 ? (
              <Text style={styles.victoryTxt}>Com Wins ! </Text>
            ) : null}
          </View>
          {/* if any of the players reaches 5 points, 
          Play Again appears and reset counters*/}
          {scoreCom >= 5 || scoreHuman >= 5 ? (
            <View style={styles.restartWrapper}>
              <TouchableOpacity
                style={styles.btnRestart}
                onPress={() => {
                  setScoreHuman(null);
                  setScoreCom(null);
                }}
              >
                <Text style={styles.btnRestartTxT}>Play Again</Text>
              </TouchableOpacity>
            </View>
          ) : null}
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
    justifyContent: "center",
    width: 200,
    height: 50,
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "black",
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
  resultsWrapperContainer: {
    alignItems: "center",
  },
  playerIcon: {
    height: 90,
    width: 90,
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
  },
  resultTxtPoint: {
    marginTop: 10,
    fontSize: 23,
    fontWeight: "bold",
  },
  victoryTxt: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#d1d1d1",
  },
  restartWrapper: {
    alignContent: "center",
  },
  btnRestart: {
    backgroundColor: "#ef5480",
    justifyContent: "center",
    width: 200,
    height: 50,
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#601454",
  },
  btnRestartTxT: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});
