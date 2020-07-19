import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { Button } from 'react-native';

import Home from '../screens/home';
import Profile from '../screens/profile';
import MyEntries from '../screens/myEntries';
import QuickEntry from '../screens/quickEntry';
import SelectedEntry from '../screens/selectedEntry';
import Settings from '../screens/settings';

import HomeInformation from '../informationScreens/homeInformation';

import Emotions from '../entryScreens/emotion';
import Situation from '../entryScreens/situation';
import Worry from '../entryScreens/worry';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ( { navigation } ) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name='Home'
      component={Home}
      options = {{
        headerLeft: () => (
          <MaterialIcons.Button
            name='menu' 
            size={35} 
            backgroundColor='#81D3F8' 
            color='#fff' 
            onPress={() => {navigation.openDrawer()}}
          ></MaterialIcons.Button>
        ),
        headerRight: () => (
          <MaterialCommunityIcons.Button
            name='information' 
            size={30} 
            backgroundColor='#81D3F8' 
            color='#fff' 
            onPress={() => navigation.navigate('HomeInformation')}
        ></MaterialCommunityIcons.Button>
        ),
        title: 'CBT Diary App',
        headerStyle: {
          backgroundColor: '#81D3F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold',
          fontSize: 25,
        } 
      }} 
      />
    <HomeStack.Screen
      name='HomeInformation'
      component={HomeInformation}
      options = {{
        title: 'Home Page Information',
        headerStyle: {
          backgroundColor: '#81D3F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold',
          fontSize: 18,
        }
      }} 
    />        
    <HomeStack.Screen
      name='Emotions'
      component={Emotions}
      options = {{
        headerRight: () => (
          <MaterialCommunityIcons.Button
            name='information' 
            size={30} 
            backgroundColor='#81D3F8' 
            color='#fff' 
            onPress={() => navigation.navigate('HomeInformation')}
        ></MaterialCommunityIcons.Button>
        ),
        title: 'Emotions',
        headerStyle: {
          backgroundColor: '#81D3F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold',
          fontSize: 25,
        }
      }} 
    />
    <HomeStack.Screen
      name='Situation'
      component={Situation}
      options = {{
        headerRight: () => (
          <MaterialCommunityIcons.Button
            name='information' 
            size={30} 
            backgroundColor='#81D3F8' 
            color='#fff' 
            //onPress={}
          ></MaterialCommunityIcons.Button>
        ),
        title: 'Situation',
        headerStyle: {
          backgroundColor: '#81D3F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold',
          fontSize: 25,
        }
      }} 
    />
    <HomeStack.Screen
      name='Worry'
      component={Worry}
      options = {{
        headerRight: () => (
          <MaterialCommunityIcons.Button
            name='information' 
            size={30} 
            backgroundColor='#81D3F8' 
            color='#fff' 
            //onPress={}
          ></MaterialCommunityIcons.Button>
        ),
        title: 'Worry',
        headerStyle: {
          backgroundColor: '#81D3F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold',
          fontSize: 25,
        }
      }} 
    />
    <HomeStack.Screen
      name='MyEntries'
      component={MyEntries}
      options = {{
        headerRight: () => (
          <MaterialCommunityIcons.Button
            name='sort' 
            size={30} 
            backgroundColor='#81D3F8' 
            color='#fff' 
            //onPress={}
          ></MaterialCommunityIcons.Button>
        ),
        title: 'My Entries',
        headerStyle: {
          backgroundColor: '#81D3F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold',
          fontSize: 25,
        }
      }} 
    />
    <HomeStack.Screen
      name='QuickEntry'
      component={QuickEntry}
      options = {{
        headerRight: () => (
          <MaterialCommunityIcons.Button
            name='information' 
            size={30} 
            backgroundColor='#81D3F8' 
            color='#fff' 
            onPress={() => navigation.navigate('HomeInformation')}
          ></MaterialCommunityIcons.Button>
        ),
        title: 'Quick Entry',
        headerStyle: {
          backgroundColor: '#81D3F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold',
          fontSize: 25,
        }
        
      }} 
    />
    <HomeStack.Screen
      name='SelectedEntry'
      component={SelectedEntry}
      options = {{
        headerRight: () => (
          <Button
            title='Publish'
            onPress={() => navigation.dispatch(StackActions.popToTop())}
            color='#fff'
          ></Button>
        ),
        title: '[Entry Title]',
        headerBackTitle: 'Back',
        headerStyle: {
          backgroundColor: '#81D3F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold',
          fontSize: 25,
        }
        
      }}
    />
  </HomeStack.Navigator>
)

const ProfileStackScreen = ( { navigation } ) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen 
      name='Profile' 
      component={Profile}
      options = {{
        headerLeft: () => (
          <MaterialIcons.Button
            name='menu' 
            size={35} 
            backgroundColor='#81D3F8' 
            color='#fff' 
            onPress={() => {navigation.openDrawer()}}
          ></MaterialIcons.Button>
        ),
        headerRight: () => (
          <MaterialCommunityIcons.Button
            name='information' 
            size={30} 
            backgroundColor='#81D3F8' 
            color='#fff' 
            onPress={() => navigation.navigate('HomeInformation')}
        ></MaterialCommunityIcons.Button>
        ),
        title: 'Profile',
        headerStyle: {
          backgroundColor: '#81D3F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold',
          fontSize: 25,
        } 
      }} 
    />
  </ProfileStack.Navigator>
)

const SettingsStackScreen = ( { navigation } ) => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen 
      name='Settings' 
      component={Settings}
      options = {{
        headerLeft: () => (
          <MaterialIcons.Button
            name='menu' 
            size={35} 
            backgroundColor='#81D3F8' 
            color='#fff' 
            onPress={() => {navigation.openDrawer()}}
          ></MaterialIcons.Button>
        ),
        title: 'Settings',
        headerStyle: {
          backgroundColor: '#81D3F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'montserrat-bold',
          fontSize: 25,
        } 
      }} 
    />
  </SettingsStack.Navigator>
)

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={HomeStackScreen} 
        />
        <Drawer.Screen 
          name="Profile" 
          component={ProfileStackScreen} 
        />
        <Drawer.Screen
          name='Settings'
          component={SettingsStackScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}