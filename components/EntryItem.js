import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EntryItem({ item, pressHandler, navigation }) {
    //Print the item's passed through the argument
    //Insert the items key into the pressHandler argument
    //Navigate to an individual entry, passing the item into the route
    return (
        <View style={styles.cardContainer}>
            <View style={styles.icon}>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={30}
                    color="black"
                    onPress={() => pressHandler(item.key)}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SelectedEntry', item)}>
                <Card>
                    <View style={styles.singleEntryText}>
                        <View style={styles.entriesTextBox}>
                            <Text style={styles.entriesText}> {item.entryTitle} </Text>
                            <Text style={styles.entriesText}> {item.when} </Text>
                        </View>
                        <View style={styles.iconBox}>
                            <MaterialIcons name="chevron-right" size={60} color="black" />
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    entriesContainer: {
        padding: 15,
    },
    entriesText: {
        fontFamily: 'montserrat-regular',
        fontSize: 16,
    },
    singleEntryText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    entriesTextBox: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '70%'
    }
});