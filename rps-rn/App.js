import React from "react";
import { StyleSheet, Text, View } from "react-native";

const weapons = ["rock", "paper", "scissors"];
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock, Paper, Scissors</Text>
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
});
