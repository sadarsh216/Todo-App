import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
} from "react-native";
import Todos from "./Pages/Todos";
import { FAB } from "react-native-paper";
import Modal from "./components/Modal";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1500,
  }).start();

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

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
          <FadeInView style={styles.modal}>
            <View>
              <TouchableWithoutFeedback onPress={() => alert("")}>
                <Modal />
              </TouchableWithoutFeedback>
            </View>
          </FadeInView>
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
