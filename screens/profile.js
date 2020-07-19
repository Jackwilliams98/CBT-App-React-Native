import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { AsyncStorage } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProfileItem from '../components/ProfileItem';

export default function Profile() {

  //Previous method of data retrival using Async
  const _retrieveData = async () => {
    try {
      const valueEmail = await AsyncStorage.getItem('email');
      const valuePassword = await AsyncStorage.getItem('password');
      const valueName = await AsyncStorage.getItem('name');
      console.log(valueEmail)
      if (valueEmail != null) {
        setEmail(valueEmail)
        setPassword(valuePassword)
        setName(valueName)
        // We have data!!
        console.log(valueEmail, valuePassword);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    //_retrieveData()
    fetch("http://10.0.2.2:3000/get-newest-user", {
      method: "get",
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
      .then(res => res.json())
      .then(results => {
        //console.log(results)
        setData(results)
        setLoading(false)
      })
  }, [])

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

