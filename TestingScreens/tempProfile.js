import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import HomePageButton from '../components/HomePageButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import { AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';
import { set } from 'mongoose';
import { FlatList } from 'react-native-gesture-handler';
import ProfileItem from '../components/ProfileItem';

export default function Profile() {

  const [_id, setID] = useState('');

  const _retrieveData = async () => {
    try {
      const valueID = await AsyncStorage.getItem('_id');
      if (valueID != null) {
        setID(valueID)
        // We have ID
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    _retrieveData()
    console.log(_id)
    fetch("http://10.0.2.2:3000/get-userID", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _id: _id
      })
    })
      .then(res => res.json())
      .then(results => {
        setData(results)
        setLoading(false)
      })
    }, [])


    // useEffect(() => {
    //   //_retrieveData()
    //   fetch("http://10.0.2.2:3000/get-user")
    //     .then(res => {
    //       const content = res.headers.get("x-auth")
    //       return res.json();
    //     })
    //     .then(results => {
    //       //console.log(token)
    //       setData(results)
    //       setLoading(false)
    //     })
    // }, [])

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    return (
      <View style={styles.container}>

        {loading ?
          <ActivityIndicator size="large" color="#0000ff" />
          :
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ProfileItem item={item} />
            )}
            keyExtractor={item => item._id}
          />
        }
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      paddingLeft: 8,
      paddingRight: 8
    },
    textBoxText: {
      width: 195,
      height: 35,
      alignSelf: "flex-start",
      borderBottomColor: '#81D3F8',
      borderBottomWidth: 2,
      paddingTop: 10,
    },
    textText: {
      fontFamily: 'montserrat-regular',
      fontSize: 18,
    },
    row1: {
      padding: 10,
      marginBottom: 6,
      marginTop: 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    row2: {
      padding: 10,
      marginBottom: 6,
      marginTop: 6,
    }
  });

