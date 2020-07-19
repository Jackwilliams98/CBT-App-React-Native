import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeInformation() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.helpScreen}>
                <View style={globalStyles.helpScreenTitleRowNoIcon}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Entry Title</Text>
                    </View>
                </View>
                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        This will be the main title displayed in your 'My Entries'
                        section once this diary entry is submitted.
                        </Text>
                </View>
                <View style={globalStyles.helpScreenTitleRowNoIcon}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>When?</Text>
                    </View>
                </View>
                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        Using the built in calander, select the date of the occurence
                        of the situation within the last week. If you are unable to
                        do so, leave this section blank.
                        </Text>
                </View>
                <View style={globalStyles.helpScreenTitleRowNoIcon}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Where?</Text>
                    </View>
                </View>

                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        Enter a one word or short description of the location
                        where the event occured. This helpes the therapist
                        understand if there is a certain place or area which
                        is a trigger for you.    
                    </Text>
                </View>
                <View style={globalStyles.helpScreenTitleRowNoIcon}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Who?</Text>
                    </View>
                </View>

                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        Use this section to list who you were with at the time. It is best to descibe
                        the person with a title, for example, mum, colleague, stranger etc.
                        </Text>
                </View>
                <View style={globalStyles.helpScreenTitleRowNoIcon}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>What?</Text>
                    </View>
                </View>

                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        This is the main section of the form. Use this to describe what happened
                        for you to feel the way you are feeling and fill out this diary.
                        </Text>
                </View>
            </View>
        </SafeAreaView>
    )

}