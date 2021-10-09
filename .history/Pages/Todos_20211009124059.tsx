import React from "react";
import { View, Text } from "react-native";

export default function Todos() {
  const [todos, setTodos] = React.useState([
    {  title: "Get email",description: "Get and email id from self service portal", id: 0 },
  ]);
  return (
    <View>
      <Text>Hey</Text>
    </View>
  );
}
