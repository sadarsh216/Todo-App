import React from 'react'
import { View, Text } from 'react-native'

export default function Todos() {
    const [todos, setTodos] = React.useState({
        "title":"Get email","description":""
    })
    return (
        <View>
            <Text>Hey</Text>
        </View>
    )
}
