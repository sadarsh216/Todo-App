import { Formik } from "formik";
import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { COLORS } from "../theme/Colors";

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
              outlineColor={COLORS.primary}
              label="Description"
              placeholder="Enter Description"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              mode="outlined"
            />
            <Button style={styles.submitBtn} color="white">
              <Text style={{ fontSize: 18 }}>Submit</Text>
            </Button>
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
    padding: 10,
    justifyContent: "space-around",
  },
  input: {
    backgroundColor: COLORS.accent,
    marginBottom: 10,
  },
  submitBtn: {
    marginTop: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.secondary,
    elevation: 4,
  },
});
