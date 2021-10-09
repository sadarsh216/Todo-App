import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Todos from "./Pages/Todos";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        
      <Text style={styles.heading}>My todos</Text>
      <Todos />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    margin: 20,
  },
});
