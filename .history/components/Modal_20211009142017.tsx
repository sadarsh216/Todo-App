import { Formik } from "formik";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function Modal() {
  return (
    <View>
      <Text style={styles.heading}>Add new</Text>
      <Formik
        initialValues={{ title: "", description: "", id: "" }}
        onSubmit={(values) => {
          // submit function
        }}
      >
        {(props) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
          </View>
        )}
      </Formik>
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
