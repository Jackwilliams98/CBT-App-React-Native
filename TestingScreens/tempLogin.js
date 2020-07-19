import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Modal, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { AsyncStorage } from 'react-native';

export default function Login({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const changeEmailHandler = (val) => {
        setEmail(val);
    }

    const changePasswordHandler = (val) => {
        setPassword(val);
    }

    const changeUsernameHandler = (val) => {
        setUsername(val);
    }

    onSubmit = async () => {
        try {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
            console.log('Email Stored')
            navigation.navigate('Home');
        } catch (error) {
            console.log(error)
        }
    }

    const onSignUp = async () => {
        try {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
            await AsyncStorage.setItem('username', username);

            setModalOpen(!modalOpen);
            console.log(email, password, username)
            navigation.navigate('Home');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <KeyboardAwareScrollView
            style={styles.container}
            keyboardShouldPersistTaps='handled'
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={globalStyles.container}
            scrollEnabled={true}
        >

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOpen}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.logInBox}>
                            <Text style={{ paddingBottom: 5, fontFamily: 'montserrat-regular' }}>
                                Email
                            </Text>
                            <TextInput
                                style={styles.text}
                                autoCapitalize="none"
                                placeholder='Please enter your email address'
                                onChangeText={changeEmailHandler}
                            />
                            <Text style={{ paddingBottom: 5, paddingTop: 30, fontFamily: 'montserrat-regular' }}>
                                Password
                            </Text>
                            <TextInput
                                style={styles.text}
                                secureTextEntry
                                autoCapitalize="none"
                                placeholder='Please enter your password'
                                onChangeText={changePasswordHandler}
                            />
                        </View>
                        <View style={styles.logInBox2}>
                            <Text
                                style={{
                                    paddingBottom: 5, fontFamily: 'montserrat-regular'
                                }}>
                                Name
                            </Text>
                            <TextInput
                                style={styles.text}
                                autoCapitalize="none"
                                placeholder='Please enter your name'
                                onChangeText={changeUsernameHandler}
                            />
    
                        </View>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#81D3F8" }}
                            onPress={() => {
                                onSignUp()
                            }}
                        >
                            <Text style={styles.textStyle}>Submit</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{ ...styles.openButton2, backgroundColor: "#81D3F8" }}
                            onPress={() => {
                                setModalOpen(!modalOpen);
                            }}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <View style={styles.logo}>
                <Image
                    style={styles.logoSize}
                    source={require('../assets/Logo.png')} />
            </View>

            <View style={styles.logInBorder}>
                <Text style={styles.logInText}>Log In</Text>
            </View>

            <View style={styles.logInBox}>

                <Text style={{
                    paddingBottom: 5, fontFamily: 'montserrat-regular'
                }}>
                    Email
                </Text>
                <TextInput
                    style={styles.text}
                    autoCapitalize="none"
                    placeholder='Please enter your email address'
                    onChangeText={changeEmailHandler}
                />
                <Text style={{
                    paddingBottom: 5, paddingTop: 30, fontFamily: 'montserrat-regular'
                }}>
                    Password
                </Text>
                <TextInput
                    style={styles.text}
                    secureTextEntry
                    autoCapitalize="none"
                    placeholder='Please enter your password'
                    onChangeText={changePasswordHandler}
                />
                <View style={{ paddingTop: 30, paddingBottom: 15 }}>
                    <Button
                        title='Log In'
                        onPress={() => {
                            onSubmit()
                            //navigation.navigate('Home');
                        }} />
                </View>

                <Button
                    title='Sign Up'
                    onPress={() => {
                        setModalOpen(true)
                    }} />
            </View>

        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    datePicker: {
        width: 300,
        marginTop: 10,
        //marginBottom: 20,
        marginRight: 40,
        alignSelf: 'flex-start',
        color: '#111'
    },
    logInBox: {
        alignSelf: "center",
        paddingTop: 50,
        //justifyContent: 'space-around'
    },
    logInBox2: {
        alignSelf: 'center',
        paddingTop: 25,
        paddingBottom: 25,
        //marginLeft: 40
    },
    text: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 5,
        fontFamily: 'montserrat-regular',
        //marginBottom: 10,
    },
    logInBorder: {
        width: 300,
        height: 100,
        alignSelf: "center",
        borderBottomColor: '#81D3F8',
        borderBottomWidth: 4,
        alignItems: "flex-start",
        paddingTop: 50,
    },
    logInText: {
        fontFamily: 'montserrat-bold',
        fontSize: 25,
    },
    logo: {
        paddingTop: 30,
        paddingBottom: 10,
    },
    logoSize: {
        width: 125,
        height: 125,
        alignSelf: "center",
        borderWidth: 2,
        borderRadius: 100 / 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 15,
        width: 150
    },
    openButton2: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        //marginBottom: 15,
        width: 150
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});