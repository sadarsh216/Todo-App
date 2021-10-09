import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable'
import { COLORS } from "../theme/Colors";

export default function Todos({ setAdd, todos, handleClick, deleteTodo }) {

  return (
    <>
      {todos.map((item) => (
        <TouchableWithoutFeedback
          key={item.id}
          onPress={() => handleClick(item)}
        >
          <Animatable.View style={styles.card} animation="slideInDown">
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
            <View style={styles.deleteSection}>
              <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                <MaterialCommunityIcons
                  name="delete-outline"
                  size={24}
                  color="#6a6a6a"
                />
              </TouchableOpacity>
            </View>
          </Animatable.View>
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
    color: COLORS.primaryText,
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
