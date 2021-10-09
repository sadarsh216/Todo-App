import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  Easing,
  NativeModules,
  Platform,
} from "react-native";
import Todos from "./Pages/Todos";
import { FAB } from "react-native-paper";
import Modal from "./components/Modal";
import * as Animatable from "react-native-animatable";
import { COLORS } from "./theme/Colors";
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function App() {
  const [todos, setTodos] = React.useState([
    {
      title: "Get email",
      description: "Get and email id from self service portal",
      id: 0,
    },
    { title: "Test 1", description: "this is a test data for test 1", id: 1 },
    { title: "Test 2", description: "this is a test data for test 2 ", id: 2 },
  ]);
  const [showAdd, setAdd] = React.useState({
    add: false,
    id: "",
  });

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.heading}>My todos</Text>
          <Todos setAdd={setAdd} todos={todos} />
        </ScrollView>
        {showAdd && (
          <Animatable.View style={styles.modal} animation="fadeInUpBig">
            <Modal />
          </Animatable.View>
        )}
      </View>
      <StatusBar style="auto" />
      <FAB
        style={{
          ...styles.fab,
          backgroundColor: showAdd ? COLORS.primary : COLORS.accent,
        }}
        icon={showAdd ? "close" : "plus"}
        onPress={() => setAdd(!showAdd)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: STATUSBAR_HEIGHT,
    height: "100%",
    backgroundColor: COLORS.primary,
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
    bottom: 0,
    height: "60%",
    width: "100%",
    display: "flex",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 4,
    padding: 10,
  },
});