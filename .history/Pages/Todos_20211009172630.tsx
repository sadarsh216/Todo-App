import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Todos({ setAdd, todos, handleClick, deleteTodo }) {
  const deleteTodo = () => {
    alert("deleted");
  };
  return (
    <>
      {todos.map((item) => (
        <TouchableWithoutFeedback
          key={item.id}
          onPress={() => handleClick(item.id)}
        >
          <View style={styles.card}>
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
        </TouchableWithoutFeedback>
      ))}
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
