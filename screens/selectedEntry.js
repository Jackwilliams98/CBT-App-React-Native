import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FinalEmotionItem from '../components/FinalEmotionItem';


export default function SelectedEntry({ route }) {

    const { entryTitle, when, where, who, what, emotions,
        worry, typeOfWorry, prediction } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.information}>
                <View style={styles.row1}>
                    <Text style={styles.outputTextTitle}>{entryTitle}</Text>
                    <Text style={styles.outputText}>{when}</Text>
                </View>

                <View style={styles.textBoxText}>
                    <Text style={styles.textText}>Situation</Text>
                </View>

                <View style={styles.row2}>
                    <Text style={styles.outputText}>Where: </Text>
                    <Text style={styles.outputTextValue}>{where}</Text>
                    <Text style={styles.outputText}>Who: </Text>
                    <Text style={styles.outputTextValue}>{who}</Text>
                    <Text style={styles.outputText}>What: </Text>
                    <Text style={styles.outputTextValue}>{what}</Text>
                </View>

                <View style={styles.textBoxText}>
                    <Text style={styles.textText}>Worry and Prediction</Text>
                </View>

                <View style={styles.row3}>
                    <Text style={styles.outputText}>Worry: </Text>
                    <Text style={styles.outputTextValue}>{worry}</Text>
                    <Text style={styles.outputText}>Type of Worry: </Text>
                    <Text style={styles.outputTextValue}>{typeOfWorry}</Text>
                    <Text style={styles.outputText}>Prediction: </Text>
                    <Text style={styles.outputTextValue}>{prediction}</Text>
                </View>

                <View style={styles.textBoxText}>
                    <Text style={styles.textText}>Emotions</Text>
                </View>

                <View style={styles.row4}>
                    <FlatList
                        data={emotions}
                        renderItem={({ item }) => (
                            <FinalEmotionItem item={item} />
                        )}
                    />
                </View>
            </View>

            <View style={styles.footer}>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 8,
        paddingRight: 8
    },
    textBoxText: {
        width: '60%',
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
    outputText: {
        fontFamily: 'montserrat-bold',
        fontSize: 14,
    },
    outputTextValue: {
        fontFamily: 'montserrat-regular',
        fontSize: 15,
        paddingLeft: 10,
    },
    outputTextTitle: {
        fontFamily: 'montserrat-bold',
        fontSize: 22,
    },
    footer: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    emotionsBox: {
        flex: 1,
        flexDirection: 'row',
    },
    information: {

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
    },
    row3: {
        padding: 10,
        marginBottom: 6,
        marginTop: 6,
    },
    row4: {
        padding: 10,
        marginBottom: 6,

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});
