import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Todos from "./Pages/Todos";

export default function App() {
  return (
    <SafeAreaView>
      <Text>Hey there!</Text>
      <Todos />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginVertical:20,
  },
});
