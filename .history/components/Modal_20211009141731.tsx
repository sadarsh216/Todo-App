import { Formik } from "formik";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Modal() {
  return (
    <View>
      <Text style={styles.heading}>Add new</Text>
      <Formik
        initialValues={{ title: "", description: "", id: "" }}
        onSubmit={(values) => {}}
      ></Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    margin: 10,
  },
});
