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
    { title: "Test 2", description: "this is a test data for test 2 ", id: 2 },
  ]);
  return (
    <>
      {todos.map((item, key) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 6,
    elevation: 4,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    color: "#383838",
  },
  desc: {
    fontWeight: "600",
    color: "#ddd",
  },
});
