import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Alert, StyleSheet, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import EntryItem from '../components/EntryItem'

import { AsyncStorage } from 'react-native';

export default function myEntries({ navigation }) {

    //Test data
    const [entries, setEntries] = useState([
        {
            entryTitle: 'Walking to work',
            when: '12-04-2020',
            where: 'The Park',
            who: 'A stranger',
            what: 'I was walking to work and there was a stranger behind me',
            emotions: [{ emotion: 'Loney', rating: '20', key: '1' },
            { emotion: 'Worried', rating: '50', key: '2' }],
            worry: 'I was going to get hurt',
            typeOfWorry: 'Hypothetical',
            prediction: 'The stranger behind me will try to hurt me when I was out of sight from the public',
            key: '1'
        },
        {
            entryTitle: 'Buying shopping',
            when: '1-03-2020',
            where: 'The Shop',
            who: 'Check out person',
            what: 'I was buying my shopping',
            emotions: [{ emotion: 'Scared', rating: '10', key: '1' },
            { emotion: 'Worried', rating: '44', key: '2' }],
            worry: 'She was going to scan something wrong',
            typeOfWorry: 'Practical',
            prediction: 'I would have to pay extra',
            key: '2'
        },
    ]);

    const _retrieveData = async () => {
        try {
            const valueEntryTitle = await AsyncStorage.getItem('entryTitle');
            const valueWhen = await AsyncStorage.getItem('when');
            const valueWhere = await AsyncStorage.getItem('where');
            const valueWho = await AsyncStorage.getItem('who');
            const valueWhat = await AsyncStorage.getItem('what');
            const valueWorry = await AsyncStorage.getItem('worry');
            const valueTypeOfWorry = await AsyncStorage.getItem('typeOfWorry');
            const valuePrediciton = await AsyncStorage.getItem('prediction');
            const value = await AsyncStorage.getItem('emotions');
            const valueEmotion = JSON.parse(value);
            const valueKey = await AsyncStorage.getItem('key')

            setEntryTitle(valueEntryTitle)
            setWhen(valueWhen)
            setWhere(valueWhere)
            setWho(valueWho)
            setWhat(valueWhat)
            setWorry(valueWorry)
            setTypeOfWorry(valueTypeOfWorry)
            setPrediction(valuePrediciton)
            setEmotions(valueEmotion)
            setKey(valueKey)


        } catch (error) {
            // Error retrieving data
            console.log(error)
        }

    };

    const newEntryHandler = (entryTitle, when, where, 
        who, what, worry, typeOfWorry, prediction, emotions, key) => {
        //Function for adding a new entry to the entries list
        if (entryTitle != null) {
            setEntries((prevEntries) => {
                const newEntry = {
                    entryTitle: entryTitle, when: when, where: where,
                    who: who, what: what, worry: worry, typeOfWorry: typeOfWorry,
                    prediction: prediction, emotions: emotions, key: key
                }
                return [
                    newEntry,
                    ...prevEntries
                ]
            })
        } else {
            Alert.alert('No new entries')
        }
    }

    const pressHandler = (key) => {
        //Used to delete entries based off of corresponding key

        Alert.alert(
            'Delete Entry',
            'Are you sure you want to delete this entry?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        setEntries((prevEntries) => {
                            return prevEntries.filter(entry => entry.key != key)
                        })
                        AsyncStorage.clear();
                    }
                }
            ],
            { cancelable: false }
        )

    }

    useEffect(() => {
        _retrieveData()
        //setLoading(false)
    }, [])

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const [entryTitle, setEntryTitle] = useState('');
    const [when, setWhen] = useState('');
    const [where, setWhere] = useState('');
    const [who, setWho] = useState('');
    const [what, setWhat] = useState('');
    const [worry, setWorry] = useState('');
    const [typeOfWorry, setTypeOfWorry] = useState('');
    const [prediction, setPrediction] = useState('');
    const [emotions, setEmotions] = useState([]);
    const [key, setKey] = useState('');

    // const [search, setSearch] = useState('');

    // const contains = (entryTitle, search) => {
    //     if (entryTitle.includes(search)) {
    //         return (true);
    //     }
    //     return (false);
    // }

    // const handleSearch = (val) => {
    //     console.log(val)
    //     const formatQuery = val.toLowerCase();
    //     const data = _.filter(entries, entryTitle => {
    //         return contains(entryTitle, formatQuery);
    //     })
    //     setSearch(formatQuery, data);
    // }

    return (
        <ScrollView style={globalStyles.container}>
            <View style={styles.searchContainer}>
                <Text style={styles.text}>Search</Text>
                <View style={styles.searchBox}>
                    <TextInput
                        placeholder="Search based on entry title's"
                    //onChangeText={handleSearch}                     
                    />
                </View>
            </View>
            <TouchableOpacity onPress={() => newEntryHandler(entryTitle, when, where, 
                who, what, worry, typeOfWorry, prediction, emotions, key)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Refresh Entries
                    </Text>
                </View>
            </TouchableOpacity>
            <FlatList
                data={entries}
                renderItem={({ item }) => (
                    <EntryItem item={item} pressHandler={pressHandler} navigation={navigation} />
                )}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#81D3F8',
        marginBottom: 10,
        alignItems: 'center',
    },
    searchBox: {
        width: "80%",
        padding: 6,
        borderWidth: 2,
        borderColor: '#81D3F8',
        borderRadius: 6,
    },

    text: {
        fontFamily: 'montserrat-regular',
        fontSize: 16,
    },
    entriesContainer: {
        padding: 15,
    },
    entriesText: {
        fontFamily: 'montserrat-regular',
        fontSize: 16,
    },
    singleEntryText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconBox: {
    },
    entriesTextBox: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'montserrat-regular',
        alignSelf: 'center',
        fontSize: 20
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        height: 40,
        color: '#fff',
        backgroundColor: '#81D3F8',
        borderColor: '#222',
        borderWidth: 3,
        borderRadius: 100 / 10,
        justifyContent: 'center',
        marginBottom: 10
    }
});