import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Todos from "./Pages/Todos";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.heading}>My todos</Text>
          <Todos />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#63a1ff",
  },
  heading: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    margin: 20,
  },
});
