import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function EmotionItem({ item, pressHandler }) {
    //Print the item's passed through the argument
    //Insert the items key into the pressHandler argument
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{item.emotion}</Text>
            <Text style={styles.item}>{item.rating}</Text>
            <View style={styles.icon}>
                <MaterialCommunityIcons 
                    name="trash-can-outline" 
                    size={24} 
                    color="black"
                    onPress={() => pressHandler(item.key)} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    item: {
        width: "45%",
        marginRight: 5,
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        fontSize: 18,
        fontFamily: 'montserrat-regular',
    },
    icon: {
        justifyContent: 'center',
        marginTop: 15
    }
})