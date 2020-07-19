import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function HomeInformation() {
    //Explaination of what each entry or object means
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.helpScreen}>
                <View style={globalStyles.helpScreenTitleRowNoIcon}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Menu Button</Text>
                    </View>
                    <MaterialIcons
                        name='menu'
                        size={60}
                        color='#333'
                    />
                </View>
                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        This button is used to bring the menu drawer out.
                        Within the menu drawer contains the 'Settings' and
                        'Profile' page's.
                    </Text>
                </View>
                <View style={globalStyles.helpScreenTitleRow}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Add New Entry</Text>
                    </View>
                    <MaterialCommunityIcons
                        name='plus-circle-outline'
                        size={60}
                        color='#333'
                    />
                </View>
                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        This button is used to enter a completely new entry.
                        This includes the situation, your emotions during the time
                        and any worries you may have had.
                    </Text>
                </View>

                <View style={globalStyles.helpScreenTitleRow}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>My Entries</Text>
                    </View>
                    <MaterialCommunityIcons
                        name='format-list-bulleted'
                        size={60}
                        color='#333'
                    />
                </View>
                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        This button is used to view all of your previously entered entries
                        and publish any unpublished entries to your therapist.
                    </Text>
                </View>
                <View style={globalStyles.helpScreenTitleRow}>
                    <View style={globalStyles.helpScreenTitleBox}>
                        <Text style={globalStyles.helpScreenTitleText}>Quick Entry</Text>
                    </View>
                    <MaterialCommunityIcons
                        name='plus-circle-multiple-outline'
                        size={60}
                        color='#333'
                        onPress={() => navigation.navigate('QuickEntry')}
                    />
                </View>
                <View style={globalStyles.helpScreenTextBox}>
                    <Text style={globalStyles.helpScreenTextBoxText}>
                        This button is used to add a quick entry only containing your
                        emotions and their rating.
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    )
}