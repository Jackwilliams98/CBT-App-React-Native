import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Settings({ navigation }) {
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={styles.settingScreen}>
                    <View style={styles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Emotions and Ratings</Text>
                    </View>

                    <View style={styles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Application Appearance</Text>
                    </View>

                    <View style={styles.helpScreenTitleBox}>
                        <Text style={styles.clearEntries}>Clear All Entries</Text>
                    </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    helpScreenTitleBox: {
        width: 330,
        //marginRight: 30,
        height: 50,
        borderColor: '#81D3F8',
        borderWidth: 3,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center'
    },
    clearEntries: {
        fontFamily: 'montserrat-bold',
        fontSize: 18,
        color: 'red'
    },
    settingScreen: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

