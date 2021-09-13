import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import rock from "./assets/icons/rock.png";
import paper from "./assets/icons/paper.png";
import scissors from "./assets/icons/scissors.png";

const Player = ({ weapons }) => {
  return (
    <View>
      <Image style={styles.playerIcon} source={rock} />
    </View>
  );
};

// styles
const styles = StyleSheet.create({
    playerIcon: {
        width: 100,
        height: 100,
        margin: 15
    }
});

export default Player;
