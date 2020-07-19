import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Modal, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { AsyncStorage } from 'react-native';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

class ConnectDatabase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUserId: undefined,
            client: undefined,
            email: undefined
        };
        this._loadClient = this._loadClient.bind(this);
        this._onPressLogin = this._onPressLogin.bind(this);
        this._onPressLogout = this._onPressLogout.bind(this);
    }

    componentDidMount() {
        this._loadClient();
    }

    render() {
        let loginStatus = "Currently logged out."

        if (this.state.currentUserId) {
            loginStatus = `Currently logged in as ${this.state.currentUserId}!`
        }

        loginButton = <Button
            onPress={this._onPressLogin}
            title="Login"
        />

        logoutButton = <Button
            onPress={this._onPressLogout}
            title="Logout" />

        return (
            <View>
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
                        onChangeText={this.changeEmailHandler}
                    />
                </View>
                {this.state.currentUserId !== undefined ? logoutButton : loginButton}
            </View>
        );
    }

    changeEmailHandler = (val) => {
        this.setState( {email: val} )
        console.log(this.email)
    }

    _loadClient() {
        Stitch.initializeDefaultAppClient('cbtapp-fugyx').then(client => {
            this.setState({ client });

            if (client.auth.isLoggedIn) {
                this.setState({ currentUserId: client.auth.user.id })
            }
        });
    }

    _onPressLogin() {
        this.state.client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
            console.log(`Successfully logged in as user ${user.id}`);
            this.setState({ currentUserId: user.id })
            //console.log(this.email);
        }).catch(err => {
            console.log(`Failed to log in anonymously: ${err}`);
            this.setState({ currentUserId: undefined })
        });
    }

    _onPressLogout() {
        this.state.client.auth.logout().then(user => {
            console.log(`Successfully logged out`);
            this.setState({ currentUserId: undefined })
        }).catch(err => {
            console.log(`Failed to log out: ${err}`);
            this.setState({ currentUserId: undefined })
        });
    }
}

export default function Login({ navigation }) {

    //const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [username, setUsername] = useState('');

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
        <ConnectDatabase />
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