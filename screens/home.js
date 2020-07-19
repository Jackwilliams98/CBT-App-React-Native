import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Button, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import { AsyncStorage } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.buttons}>

        <Separator />

        <TouchableOpacity onPress={() => navigation.navigate('Situation')}>
          <View style={globalStyles.button}>
            <Text style={styles.buttonText}>
              Add New Entry
                </Text>
          </View>
        </TouchableOpacity>

        <MaterialCommunityIcons
          name='plus-circle-outline'
          size={80}
          color='#333'
          onPress={() => navigation.navigate('Situation')}
        />

        <Separator />

        <TouchableOpacity onPress={() => navigation.navigate('MyEntries')}>
          <View style={globalStyles.button}>
            <Text style={styles.buttonText}>
              My Entries
                </Text>
          </View>
        </TouchableOpacity>

        <MaterialCommunityIcons
          name='format-list-bulleted'
          size={80}
          color='#333'
          onPress={() => navigation.navigate('MyEntries')}
        />

        <Separator />

        <TouchableOpacity onPress={() => navigation.navigate('QuickEntry')}>
          <View style={globalStyles.button}>
            <Text style={styles.buttonText}>
              Quick Entry
            </Text>
          </View>
        </TouchableOpacity>
        <MaterialCommunityIcons
          name='plus-circle-multiple-outline'
          size={80}
          color='#333'
          onPress={() => navigation.navigate('QuickEntry')}
        />
        <Separator />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 25,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'montserrat-bold',
    alignSelf: 'center',
    fontSize: 20
  }
});