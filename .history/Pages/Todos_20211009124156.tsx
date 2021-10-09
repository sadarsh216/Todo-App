import React from "react";
import { View, Text } from "react-native";

export default function Todos() {
  const [todos, setTodos] = React.useState([
    {
      title: "Get email",
      description: "Get and email id from self service portal",
      id: 0,
    },
    { title: "Test 1", description: "this is a test data for test 1", id: 1 },
    { title: "Test 2", description: "this is a test data for test 2", id: 2 },
  ]);
  return (
    <View>
      <Text>Hey</Text>
    </View>
  );
}
