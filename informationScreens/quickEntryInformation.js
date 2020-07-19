import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function EmotionInformation() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.helpScreen}>
                <View style={globalStyles.helpScreenTitleRowNoIcon}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Emotion</Text>
                    </View>
                </View>
                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        Use this section to write whatever emotion you felt at the
                        time. Don't be afraid of really documenting all of the emotions
                        as the better understanding of how you feel will help more in the
                        long term.
                    </Text>
                </View>
                <View style={globalStyles.helpScreenTitleRowNoIcon}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Rating</Text>
                    </View>
                </View>
                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        Enter a number between 0 and 99 to describe how much you felt the
                        emotion which you had entered. Only when both an emotion and
                        rating have been entered can the entry be made, so make sure
                        that you fill both these sections in! Don't worry about the
                        rating exceeding 100 either!
                    </Text>
                </View>
                <View style={globalStyles.helpScreenTitleRowNoIcon}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Rubbish Bin</Text>
                    </View>
                    <MaterialCommunityIcons
                        name="trash-can-outline"
                        size={34}
                        color="black"
                        onPress={() => pressHandler(item.key)}
                    />
                </View>

                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        The rubbish bin icon can be used to clear an emotion
                        which you didn't mean to enter or made a mistake
                        when entering.
                    </Text>
                </View>
                <View style={globalStyles.helpScreenTitleRowNoIcon}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Submit Quick Entry</Text>
                    </View>
                </View>
                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        This button is used to submit the emotions you have entered on this page.
                        This will create a quick entry entry viewable on the 'My Entries' page.
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
    },
    largerBox2: {
        width: 330,
        alignSelf: 'center',
        height: 105,
        padding: 5,
        borderColor: '#797979',
        borderWidth: 2,
        marginBottom: 20
    }
});
