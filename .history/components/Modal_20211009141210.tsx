import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Modal() {
  return (
    <View>
      <Text style={styles.heading}>Add new</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
});
