import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Todos() {
  const [todos, setTodos] = React.useState([
    {
      title: "Get email",
      description: "Get and email id from self service portal",
      id: 0,
    },
    { title: "Test 1", description: "this is a test data for test 1", id: 1 },
    { title: "Test 2", description: "this is a test data for test 2", id: 2 },
  ]);
  return (
    <>
      <View style={styles.card}></View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 6,
    elevation: 4,
  },
  title: {
    fontWeight: "400",
    color: "#000",
  },
  desc: {
    fontWeight: "300",
    color: "#ddd",
  },
});
