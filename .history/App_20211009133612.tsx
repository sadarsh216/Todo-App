import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Todos from "./Pages/Todos";
import { FAB } from "react-native-paper";
import Modal from "./components/Modal";

export default function App() {
  const [showAdd, setAdd] = React.useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.heading}>My todos</Text>
          <Todos />
        </ScrollView>
        {showAdd && (
          <View style={styles.modal}>
            <TouchableWithoutFeedback onPress={() => alert("")}>
              <Modal />
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => setAdd(!showAdd)}
      />
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
  fab: {
    color: "#fff",
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  modal: {
    position: "absolute",
    bottom:0,
    height: "40%",
    width: "100%",
    display: "flex",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
});
