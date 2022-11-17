import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={()=>deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver'
    },
    text: {
        padding: 20,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 20,
        flexDirection: 'row',
        width: '60%',
        marginLeft: '20%',
        overflow: 'hidden'
    }
})