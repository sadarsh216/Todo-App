import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Todos({ setAdd }) {
  const [todos, setTodos] = React.useState([
    {
      title: "Get email",
      description: "Get and email id from self service portal",
      id: 0,
    },
    { title: "Test 1", description: "this is a test data for test 1", id: 1 },
    { title: "Test 2", description: "this is a test data for test 2 ", id: 2 },
  ]);
  const deleteTodo = () => {
    alert("deleted");
  };
  return (
    <>
      <TouchableOpacity onPress={() => setAdd(false)}>
        {todos.map((item, key) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
            <View style={styles.deleteSection}>
              <TouchableOpacity onPress={deleteTodo}>
                <MaterialCommunityIcons
                  name="delete-outline"
                  size={24}
                  color="#6a6a6a"
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 6,
    elevation: 4,
    padding: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    color: "#383838",
  },
  desc: {
    paddingHorizontal: 10,
    fontWeight: "600",
    color: "#6a6a6a",
  },
  details: {
    flex: 2,
  },
  deleteSection: {
    justifyContent: "center",
  },
});
