import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function WorryInformation() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.smallerHelpScreen}>
                <View style={globalStyles.helpScreenTitleRow}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Worry</Text>
                    </View>
                </View>
                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        This area is used to discuss what was going through
                        your head at the time of the situation - what were you
                        worried about?
                    </Text>
                </View>
                <View style={globalStyles.helpScreenTitleRow}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Type of Worry</Text>
                    </View>
                </View>
                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        A worry can be classified as 'Hypothetical' or
                        'Practical'. A hypothetical worry is where
                        no action you can take could solve the worry.
                        A practical worry is where you could take action
                        to solve the worry.
                    </Text>
                </View>
                <View style={globalStyles.helpScreenTitleRow}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Prediction</Text>
                    </View>
                </View>

                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        This section is important to understand what you feel your worry is
                        doing to the way you think. What do you actually think is going to happen based
                        off of your worry?
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    largerBox: {
        width: 330,
        alignSelf: 'center',
        height: 80,
        padding: 5,
        borderColor: '#797979',
        borderWidth: 2,
        marginBottom: 20
    }
});
