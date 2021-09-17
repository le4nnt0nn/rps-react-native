import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import rock from "./assets/icons/rock.png";
import paper from "./assets/icons/paper.png";
import scissors from "./assets/icons/scissors.png";

const Player = ({ weapon }) => {
  return (
    <View>
      {/* Image source with props */}
      <Image
        style={styles.playerIcon}
        source={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
        }
      />
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  playerIcon: {
    width: 200,
    height: 200,
    margin: 15,
  },
});

export default Player;
