import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ButtonFlotant = ({nav}) => (
    <TouchableOpacity
        onPress={() => nav}
        style={styles.button}
      >
        <FontAwesome5 name="plus-circle" size={40} />
      </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
      position: "absolute",
      width: 56,
      height: 56,
      alignItems: "center",
      justifyContent: "center",
      right: 20,
      bottom: 20,
      borderRadius: 30,
      elevation: 8,
    },
  });

export default ButtonFlotant;