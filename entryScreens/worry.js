import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Picker, TextInput, View, Text, Alert } from 'react-native';
import { globalStyles } from '../styles/global';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { AsyncStorage } from 'react-native';

export default function Worry({ navigation }) {

    //Use State values of variables collected on this screen
    const [worry, setWorry] = useState('');
    const [typeOfWorry, setTypeOfWorry] = useState('');
    const [prediction, setPrediction] = useState('');
    const [key, setKey] = useState('');

    //Functions to update the use states
    const changeWorryHandler = (val) => {
        setWorry(val);
    }

    const changeTypeOfWorryHandler = (val) => {
        setTypeOfWorry(val);
    }

    const changePredictionHandler = (val) => {
        setPrediction(val);
    }

    //On submit of this page, set each value acquired to the most recent one
    const onSubmit = async () => {
        try {
            const entryTitle = await AsyncStorage.getItem('entryTitle');
            const when = await AsyncStorage.getItem('when');
            const where = await AsyncStorage.getItem('where');
            const who = await AsyncStorage.getItem('who');
            const what = await AsyncStorage.getItem('what');
            const emotions = await AsyncStorage.getItem('emotions');
            const valueEmotion = JSON.parse(emotions);
            const worry = await AsyncStorage.getItem('worry');
            const typeOfWorry = await AsyncStorage.getItem('typeOfWorry');
            const prediction = await AsyncStorage.getItem('prediction');
            const newKey = Math.random().toString()
            const key = await AsyncStorage.setItem('key', newKey);


            if ((entryTitle == null)
                || (when == null)) {
                Alert.alert(
                    'Incomplete Entry Title and Date',
                    'These sections of the form are required to proceed with an entry submission.      Please complete these sections.',
                    [
                    {
                        text: 'Ok',
                        onPress: () => {
                            console.log('Ok Pressed')
                        }
                    }
                    ],
                    { cancelable: false }
                )
            } else if
                ((where == null)
                || (who == null)
                || (what == null)
                || (valueEmotion.length == 0)
                || (worry == null)
                || (typeOfWorry == null)
                || (prediction == null)) {
                Alert.alert(
                    'Incomplete Entry',
                    'Are you sure you want to leave some sections blank?',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel'
                        },
                        {
                            text: 'Yes',
                            onPress: () => {
                                navigation.navigate('EntryBeforeSubmit')
                                console.log('Entry Submitted')
                            }
                        }
                    ],
                    { cancelable: false }
                )
            } else {
                Alert.alert(
                    'Submit New Entry',
                    'Are you sure you want to submit this entry?',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel'
                        },
                        {
                            text: 'Yes',
                            onPress: () => {
                                navigation.navigate('EntryBeforeSubmit')
                                console.log('Entry Submitted')
                            }
                        }
                    ],
                    { cancelable: false }
                )
            }
        } catch (error) {
            // Error retrieving data
            console.log(error)
        }
    }

    //Update the values being collected on this screen
    const _setData = async () => {

        try {
            await AsyncStorage.setItem('worry', worry);
            await AsyncStorage.setItem('typeOfWorry', typeOfWorry);
            await AsyncStorage.setItem('prediction', prediction);
            await AsyncStorage.setItem('key', key);
            console.log('Worry Stored')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        _setData()
    })

    return (

        <KeyboardAwareScrollView
            style={{ backgrounColor: '#81D3F8' }}
            keyboardShouldPersistTaps='handled'
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={true}
        >
            <View>
                <View style={styles.entrytitle}>
                    <View style={globalStyles.textBoxText}>
                        <Text style={globalStyles.textText}>Worry</Text>
                    </View>
                    <TextInput
                        multiline
                        placeholder='What went through your mind?'
                        style={styles.input}
                        onChangeText={changeWorryHandler}
                    />
                </View>
                <View style={styles.entrytitle}>
                    <View style={globalStyles.textBoxText}>
                        <Text style={globalStyles.textText}>Type of Worry?</Text>
                    </View>
                    <Picker
                        style={styles.input}
                        selectedValue={typeOfWorry}
                        onValueChange={(itemValue, itemIndex) =>
                            changeTypeOfWorryHandler(itemValue)}
                    >
                        <Picker.Item label='Please select a type of worry...' value='' />
                        <Picker.Item label='Hypothetical' value='Hypothetical' />
                        <Picker.Item label='Practical' value='Practical' />
                    </Picker>
                </View>
                <View style={styles.entrytitle}>
                    <View style={globalStyles.textBoxText}>
                        <Text style={globalStyles.textText}>Prediction</Text>
                    </View>
                    <TextInput
                        multiline
                        placeholder='What are you predicting will happen?'
                        style={styles.inputPrediction}
                        onChangeText={changePredictionHandler}
                    />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => { onSubmit() }}>
                        <View style={globalStyles.button}>
                            <Text style={styles.buttonText}>
                                Submit Entry
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    entrytitle: {
        paddingLeft: 15,
    },
    textBox: {
        paddingLeft: 0,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        marginTop: 10,
        marginBottom: 20,
        width: '95%',
        textAlign: "left",
        fontSize: 18,
        fontFamily: 'montserrat-regular',
    },
    inputPrediction: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        marginTop: 10,
        marginBottom: 20,
        width: '95%',
        //height: 90,
        textAlign: "left",
        fontSize: 18,
        fontFamily: 'montserrat-regular',
        //Need to make this at the top of the box
    },
    ddmmyyyy: {
        flex: 1,
        flexDirection: "row",
    },
    inputDate: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        marginTop: 10,
        marginBottom: 20,
        width: 96,
        marginRight: 6,
        textAlign: "left",
        fontSize: 18,
        fontFamily: 'montserrat-regular',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'montserrat-regular',
        alignSelf: 'center',
        fontSize: 20
    }
});

// const newEntry = {
//     entryTitle: entryTitle, when: when, where: where,
//     who: who, what: what, worry: worry, typeOfWorry: typeOfWorry,
//     prediction: prediction, emotions: emotions, key: key
// }
// fetch("http://10.0.2.2:3000/send-user", {
//     method: "post",
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         entries: newEntry
//     })
// }).then(res => res.text())
//     .then(data => {
//         console.log(data)
//         Alert.alert('New entry added')
//     })