import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ProfileItem({ item }) {
    //Print the item object
    return (
        <View style={styles.information}>
            <View style={styles.textBoxText}>
                <Text style={styles.textText}>Information</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.textText}>Email: {item.email}</Text>
            </View>
            <View style={styles.row2}>
                <Text style={styles.textText}>Name: {item.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingLeft: 8,
        paddingRight: 8
    },
    item: {
        width: 130,
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
    },
    textBoxText: {
        width: 195,
        height: 35,
        alignSelf: "flex-start",
        borderBottomColor: '#81D3F8',
        borderBottomWidth: 2,
        paddingTop: 10,
    },
    textText: {
        fontFamily: 'montserrat-regular',
        fontSize: 18,
    },
    row1: {
        padding: 10,
        marginBottom: 6,
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row2: {
        padding: 10,
        marginBottom: 6,
        marginTop: 6,
    }
});

