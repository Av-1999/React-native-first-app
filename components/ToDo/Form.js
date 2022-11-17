import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";


export default function Form({ addHandler }) {

    const [text, setText] = useState('');

    const onChange = (text) => {
        setText(text)
    }

    return (
        <View>
            <TextInput
                placeholder="write to do"
                style={styles.input}
                onChangeText={onChange}
            />
            <Button
                style={styles.button}
                title='Add ToDo'
                onPress={() => addHandler(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        color: 'black',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    },
    button: {

    }
})