import { Formik } from "formik";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ActionSheetIOS,
  KeyboardAvoidingView,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { COLORS } from "../theme/Colors";
import * as yup from "yup";

const todoSchema = yup.object({
  title: yup.string().required().min(4),
  description: yup.string().required().min(10).max(250),
});

export default function Modal() {
  return (
    <KeyboardAvoidingView>
      <View>
        <Text style={styles.heading}>Add new</Text>
        <Formik
          initialValues={{ title: "", description: "", id: "" }}
          validationSchema={todoSchema}
          onSubmit={(values, actions) => {
            // submit function
            actions.resetForm();
            alert(values);
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
                underlineColor={COLORS.inputs}
                error={props.touched.title && props.errors.title ? true : false}
                onBlur={props.handleBlur("title")}
              />
              <Text style={styles.error}>
                {props.touched.title && props.errors.title}
              </Text>
              <TextInput
                style={styles.input}
                underlineColor={COLORS.inputs}
                label="Description"
                placeholder="Enter Description"
                onChangeText={props.handleChange("description")}
                value={props.values.description}
                onBlur={props.handleBlur("description")}
                error={
                  props.touched.description && props.errors.description
                    ? true
                    : false
                }
                multiline={true}
                numberOfLines={7}
              />
              <Text style={styles.error}>
                {props.touched.description && props.errors.description}
              </Text>
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
    </KeyboardAvoidingView>
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
    backgroundColor: COLORS.inputs,
      borderRadius: 6,
    elevation:2
  },
  submitBtn: {
    marginTop: 10,
    backgroundColor: COLORS.secondary,
    elevation: 4,
  },
  error: {
    color: "red",
  },
});
