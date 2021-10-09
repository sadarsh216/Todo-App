import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Todos from "./Pages/Todos";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>My todos</Text>
        <Todos />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#63a1ff",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    margin: 20,
  },
});
