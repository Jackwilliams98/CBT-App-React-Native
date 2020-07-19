import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import EmotionItem from '../components/EmotionItem';
import { globalStyles } from '../styles/global';
import { FlatList } from 'react-native-gesture-handler';
import AddEmotion from '../components/addEmotion';


export default function Emotion({ navigation }) {

    const [emotions, setEmotions] = useState([]);

    const pressHandler = (key) => {
        //Used to delete entries based off of corresponding key

        Alert.alert(
            "Delete Emotion",
            "Are you sure you want to delete this emotion?",
            [
                {
                    text: "Cancel", onPress: () => {
                        console.log("Cancel Pressed")
                    }
                },
                {
                    text: "Yes", onPress: () =>
                        setEmotions((prevEmotions) => {
                            return prevEmotions.filter(emotion => emotion.key != key)
                        })
                }
            ],
            { cancelable: false }
        );

    }

    const submitHandler = (emotion, rating) => {

        const newKey = Math.random().toString()

        if ((emotion.length > 2)
            && (rating.length > 0)
            && (rating.length < 3)
            && (emotion.key != newKey)) {
            setEmotions((prevEmotions) => {
                const newEmotion = { emotion: emotion, rating: rating, key: newKey }
                let count = 0;
                console.log(newEmotion.emotion)
                for (let i = 0; i < prevEmotions.length; i++) {
                    const previousEmotionsEntered = prevEmotions[i];
                    console.log(previousEmotionsEntered.emotion)
                    if (newEmotion.emotion == previousEmotionsEntered.emotion) {
                        count += 1;
                    }
                }

                if (count == 0) {
                    return [
                        newEmotion,
                        ...prevEmotions
                    ]
                } else {
                    Alert.alert(
                        "Duplicate Emotion",
                        "Please enter a unique emotion",
                        [
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                    );
                    return [
                        ...prevEmotions
                    ]
                }
            });
        } else {
            Alert.alert('Please enter a valid emotion and rating')
        }
    }

    return (
        <ScrollView
            style={globalStyles.container}
        >
            <View style={styles.content}>
                <AddEmotion submitHandler={submitHandler} />
                <View style={styles.list}>
                    <FlatList
                        data={emotions}
                        renderItem={({ item }) => (
                            <EmotionItem item={item} pressHandler={pressHandler} />
                        )}
                    />
                </View>
            </View>


            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={globalStyles.button}>
                        <Text style={styles.buttonText}>
                            Submit Quick Entry
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'montserrat-bold',
        alignSelf: 'center',
        fontSize: 20
    }
});