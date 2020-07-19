import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Menu( { navigation } ) {
    return (
        <View style={styles.buttons}>
            <View style={globalStyles.meanuButton}>
                <MaterialIcons.Button 
                    name='person' 
                    size={35} 
                    backgroundColor='#81D3F8' 
                    color='#fff'
                    onPress={() => navigation.navigate('Profile')}
                /> 
                <Button
                    color='#fff'
                    title='Profile' 
                    onPress={() => navigation.navigate('Profile')} 
                />
            </View>
            <View style={globalStyles.meanuButton}>
                <MaterialIcons.Button 
                    name='help-outline' 
                    size={35} 
                    backgroundColor='#81D3F8' 
                    color='#fff'
                />
                <Button
                    color='#fff' 
                    title='Support and Important Contacts' 
                    onPress={() => navigation.navigate('Profile')} 
                />
            </View>
            <View style={globalStyles.meanuButton}>
                <MaterialCommunityIcons.Button 
                    name='account-group' 
                    size={35} 
                    backgroundColor='#81D3F8' 
                    color='#fff'
                />
                <Button
                    color='#fff'
                    title='About Us' 
                    onPress={() => navigation.navigate('Profile')} 
                />
            </View>
            <View style={globalStyles.meanuButton}>
                <MaterialIcons.Button 
                    name='settings' 
                    size={35} 
                    backgroundColor='#81D3F8' 
                    color='#fff'
                />
                <Button
                    color='#fff'
                    title='Settings' 
                    onPress={() => navigation.navigate('Profile')} 
                />                               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
      flex: 1,
      justifyContent: 'space-around',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: 25,
    },
  });
