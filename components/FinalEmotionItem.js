import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function FinalEmotionItem({ item }) {
    //Print the item object
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{item.emotion}</Text>
            <Text style={styles.item}>{item.rating}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    item: {
        width: 165,
        marginRight: 5,
        padding: 10,
        marginTop: 6,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        fontSize: 18,
        fontFamily: 'montserrat-regular',
    },
})