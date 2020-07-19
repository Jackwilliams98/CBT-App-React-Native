import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, TextInput, View, Text, Alert } from 'react-native';
import { globalStyles } from '../styles/global';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { AsyncStorage } from 'react-native';
import Moment from 'moment';
import DatePicker from 'react-native-datepicker';
import MapView from 'react-native-maps';


export default function Situation() {

    //Use state constants
    const [entryTitle, setEntryTitle] = useState('');
    const [when, setWhen] = useState('');
    const [where, setWhere] = useState('');
    const [who, setWho] = useState('');
    const [what, setWhat] = useState('');

    //Update input values
    const changeEntryTitleHandler = (val) => {
        setEntryTitle(val);
    }
    const changeWhenHandler = (val) => {
        console.log(val)
        setWhen(val);
    }
    const changeWhereHandler = (val) => {
        setWhere(val);
    }
    const changeWhoHandler = (val) => {
        setWho(val);
    }
    const changeWhatHandler = (val) => {
        setWhat(val);
    }

    const _setData = async () => {
        //Set entry items
        try {
            await AsyncStorage.setItem('entryTitle', entryTitle);
            await AsyncStorage.setItem('when', when);
            await AsyncStorage.setItem('where', where);
            await AsyncStorage.setItem('who', who);
            await AsyncStorage.setItem('what', what);
            console.log('Information Stored')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        //Constant updates for the AsyncStorage of a value
        _setData()
    })


    return (
        <KeyboardAwareScrollView
            style={{ backgrounColor: '#81D3F8' }}
            keyboardShouldPersistTaps='handled'
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={true}
            extraHeight={10}
        >
            <View>
                <View style={styles.entrytitle}>
                    <View style={globalStyles.textBoxText}>
                        <Text style={globalStyles.textText}>Entry Title:</Text>
                    </View>
                    <TextInput
                        placeholder='Entry Title'
                        style={styles.input}
                        onChangeText={changeEntryTitleHandler}
                    />
                </View>
                <View style={styles.entrytitle}>
                    <View style={globalStyles.textBoxText}>
                        <Text style={globalStyles.textText}>When Did This Happen?</Text>
                    </View>
                    <DatePicker
                        style={styles.datePicker}
                        date={when}
                        mode="date"
                        placeholder={"Please select a date"}
                        format="DD-MM-YYYY"
                        minDate={Moment().subtract(7, 'days').format('DD-MM-YYYY')}
                        maxDate={Moment().add(0, 'days').format('DD-MM-YYYY')}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={changeWhenHandler}
                    />
                </View>
                <View style={styles.entrytitle}>
                    <View style={globalStyles.textBoxText}>
                        <Text style={globalStyles.textText}>Where Did This Happen?</Text>
                    </View>
                    <TextInput
                        placeholder='Location'
                        style={styles.input}
                        onChangeText={changeWhereHandler}
                    />
                </View>
                <View style={styles.entrytitle}>
                    <View style={globalStyles.textBoxText}>
                        <Text style={globalStyles.textText}>Who With?</Text>
                    </View>
                    <TextInput
                        multiline
                        style={styles.input}
                        placeholder='Who was there/who was it about?'
                        onChangeText={changeWhoHandler}
                    />
                </View>
                <View style={styles.entrytitle}>
                    <View style={globalStyles.textBoxText}>
                        <Text style={globalStyles.textText}>What Happend?</Text>
                    </View>
                    <TextInput
                        multiline
                        style={styles.input}
                        placeholder='What happened during this situation?'
                        onChangeText={changeWhatHandler}
                    />
                </View>

            </View>

        </KeyboardAwareScrollView >
    )
}

const styles = StyleSheet.create({
    datePicker: {
        width: '80%',
        marginTop: 10,
        marginBottom: 20,
        marginRight: 40,
        alignSelf: 'center'
    },
    datePickerText: {
        fontSize: 10
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
    separator: {
        marginVertical: 8,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 25,
    },
    mapStyle: {
        width: 300,
        height: 200,
    },
});

