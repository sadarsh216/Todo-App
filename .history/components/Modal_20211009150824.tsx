import { Formik } from "formik";
import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { COLORS } from "../theme/Colors";
import * as yup from "yup";

const todoSchema = yup.object({
    title: yup.string().required().min()
})

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
              label="Title"
              placeholder="Enter title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              mode="outlined"
            />
            <TextInput
              style={styles.input}
              outlineColor={COLORS.primary}
              label="Description"
              placeholder="Enter Description"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              mode="outlined"
              multiline={true}
              numberOfLines={7}
            />
            <Button
              onPress={props.handleSubmit}
              style={styles.submitBtn}
              color="white"
            >
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
    marginBottom: 10,
    backgroundColor: "white",
  },
  submitBtn: {
    marginTop: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.secondary,
    elevation: 4,
  },
});
