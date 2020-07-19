import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';


export default function addEmotion({ submitHandler }) {

    //userState Variables
    const [emotion, setEmotion] = useState('');
    const [rating, setRating] = useState('');

    //Functions to update input
    const changeEmotionHandler = (val) => {
        setEmotion(val);
    }

    const changeRatingHandler = (val) => {
        setRating(val);
    }

    return (
        <View>
            {/* Emotions input */}
            <TextInput
                style={styles.input}
                placeholder='Emotion (What were you feeling?)'
                onChangeText={changeEmotionHandler}
            />
            {/* Rating input */}
            <TextInput
                style={styles.input}
                placeholder='Rating (0-99)'
                keyboardType='numeric'
                onChangeText={changeRatingHandler}
            />
            {/* Button handler */}
            <TouchableOpacity onPress={() => submitHandler(emotion, rating)}>
                <View style={globalStyles.button}>
                    <Text style={styles.buttonText}>
                        Add Emotion and Rating
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'montserrat-regular',
        alignSelf: 'center',
        fontSize: 20
    }
})