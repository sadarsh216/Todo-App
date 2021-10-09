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
} from "react-native";
import Todos from "./Pages/Todos";
import { FAB } from "react-native-paper";
import Modal from "./components/Modal";
import * as Animatable from "react-native-animatable";

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
          <Animatable.View style={styles.modal} animation="bounceInBig">
            <TouchableWithoutFeedback onPress={() => alert("")}>
              <Modal />
            </TouchableWithoutFeedback>
          </Animatable.View>
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
    bottom: 0,
    height: "60%",
    width: "100%",
    display: "flex",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 4,
    padding: 10,
    // backgroundColor: "rgba(0,0,0,0.4)",
  },
});
