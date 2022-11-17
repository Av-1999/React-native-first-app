import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>To Do List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver'
    },
    text: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center'
    }
})