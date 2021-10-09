import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Todos from "./Pages/Todos";

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>My todos</Text>
      <Todos />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    margin: 20,
  },
});
