import { Formik } from "formik";
import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
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
            <TextInput
              style={styles.input}
              placeholder="Enter Description"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <TouchableWithoutFeedback onPress={props.handleSubmit}>
              <Text style={styles.submitBtn}>Submit</Text>
            </TouchableWithoutFeedback>
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
    formContainer: {
      padding:10,
    justifyContent: "space-around",
  },
    input: {
        backgroundColor: 'transparent',
        marginBottom:10,
  },
    submitBtn: {
        padding: 10,
        backgroundColor:'tomato'
  },
});
