import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

{//https://github.com/APSL/react-native-keyboard-aware-scroll-view where I accessed the keyboard fix
}

export default function Situations( { navigation } ) {

    const [entryTitle, setEntryTitle] = useState('Entry Title');
    const [day, setDay] = useState('dd')
    const [month, setMonth] = useState('mm')
    const [year, setYear] = useState('yyyy')
    const [time, setTime] = useState('Time (optional) hh:mm')


    return (
        <KeyboardAwareScrollView
            style={{backgrounColor: '#81D3F8'}}
            keyboardShouldPersistTaps='handled'
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={true}
        >
            <View style={styles.entrytitle}>
                <View style={globalStyles.textBoxText}>
                    <Text>Entry Title:</Text>
                </View>
                    <TextInput
                        multiline
                        style={styles.input}
                        placeholder={entryTitle}
                        onChangeText={(val) => setEntryTitle(val)}    
                    />
            </View>
            <View style={styles.entrytitle}>
                <View style={globalStyles.textBoxText}>
                    <Text>When Did This Happen?</Text>
                </View>
                <View style={styles.dateAndTime}>
                    <View style={styles.ddmmyyyy}>
                    <TextInput 
                        style={styles.inputDate}
                        keyboardType="numeric"
                        maxLength={2}
                        placeholder={day}
                        onChangeText={(val) => setDay(val)}    
                    />
                    <TextInput 
                        style={styles.inputDate}
                        keyboardType="numeric"
                        maxLength={2}
                        placeholder={month}
                        onChangeText={(val) => setMonth(val)}    
                    />
                    <TextInput 
                        style={styles.inputDate}
                        keyboardType="numeric"
                        maxLength={4}
                        placeholder={year}
                        onChangeText={(val) => setYear(val)}    
                    />
                    </View>
                    <TextInput 
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder={time}
                        onChangeText={(val) => setTime(val)}    
                    />
                </View>
            </View>
            <View style={styles.entrytitle}>
                <View style={globalStyles.textBoxText}>
                    <Text>Where Did This Happen?</Text>
                </View>
                    <TextInput 
                        style={styles.input}
                        onChangeText={(val) => setEntryTitle(val)}    
                    />
            </View>
            <View style={styles.entrytitle}>
                <View style={globalStyles.textBoxText}>
                    <Text>Who With?</Text>
                </View>
                    <TextInput 
                        multiline
                        style={styles.input}
                        onChangeText={(val) => setEntryTitle(val)}    
                    />
            </View>
            <View style={styles.entrytitle}>
                <View style={globalStyles.textBoxText}>
                    <Text>What Happend?</Text>
                </View>
                    <View style={styles.textBox}>
                        <TextInput 
                            multiline
                            style={styles.input}
                            onChangeText={(val) => setEntryTitle(val)}    
                        />
                    </View>
            </View>

            <View style={styles.footer}>
                <View style={globalStyles.button}>
                    <Button 
                        title='Next - Emotions'
                        color='#fff'
                        onPress={() => navigation.navigate('Emotions')}/>
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
        width: 300,
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
    }
});