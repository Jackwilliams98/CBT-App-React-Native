import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import { FlatList } from 'react-native-gesture-handler';

import FinalEmotionItem from '../components/FinalEmotionItem';

import { AsyncStorage } from 'react-native';


export default function entryBeforeSubmit({ navigation }) {

    const clearAsyncStorage = async () => {
        //AsyncStorage.clear();
        navigation.navigate('Home')
    }

    const _retrieveData = async () => {
        //Retrieve all the informaiton from Async and set values
        try {
            const valueEntryTitle = await AsyncStorage.getItem('entryTitle');
            const valueWhen = await AsyncStorage.getItem('when');
            const valueWhere = await AsyncStorage.getItem('where');
            const valueWho = await AsyncStorage.getItem('who');
            const valueWhat = await AsyncStorage.getItem('what');
            const valueWorry = await AsyncStorage.getItem('worry');
            const valueTypeOfWorry = await AsyncStorage.getItem('typeOfWorry');
            const valuePrediction = await AsyncStorage.getItem('prediction');
            const value = await AsyncStorage.getItem('emotions');
            const valueEmotion = JSON.parse(value);
            const valueKey = await AsyncStorage.getItem('key');

            setEntryTitle(valueEntryTitle)
            setWhen(valueWhen)
            setWhere(valueWhere)
            setWho(valueWho)
            setWhat(valueWhat)
            setWorry(valueWorry)
            setTypeOfWorry(valueTypeOfWorry)
            setPrediction(valuePrediction)
            setEmotions(valueEmotion)
            setKey(valueKey)

        } catch (error) {
            // Error retrieving data
            console.log(error)
        }
    };

    useEffect(() => {
        //Call once when the screen is loaded
        _retrieveData()
        setLoading(false)
    }, []);

    const [entryTitle, setEntryTitle] = useState('');
    const [when, setWhen] = useState('');
    const [where, setWhere] = useState('');
    const [who, setWho] = useState('');
    const [what, setWhat] = useState('');
    const [worry, setWorry] = useState('');
    const [typeOfWorry, setTypeOfWorry] = useState('');
    const [prediction, setPrediction] = useState('');
    const [emotions, setEmotions] = useState([]);
    const [key, setKey] = useState('');

    const [loading, setLoading] = useState(true)

    //Print the whole entry using most up to date use states
    return (
        <ScrollView
            style={styles.container}
        >
            {loading ?
                <ActivityIndicator size="large" color="#0000ff" />
                :
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
            }
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => {
                    // clearAsyncStorage()
                    navigation.navigate('Home')
                }}>
                    <View style={globalStyles.button}>
                        <Text style={styles.buttonText}>
                            Go Home
                            </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <MaterialCommunityIcons
                name='plus-circle-multiple-outline'
                size={50}
                color='#f2f2f2'
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
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
        marginBottom: 10,
    },
    outputTextTitle: {
        fontFamily: 'montserrat-bold',
        fontSize: 20,
    },
    footer: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
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
    },
    buttonText: {
        color: 'white',
        fontFamily: 'montserrat-regular',
        alignSelf: 'center',
        fontSize: 20
    }
});