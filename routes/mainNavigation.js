import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { TouchableOpacity, Alert, Text, StyleSheet } from 'react-native';

import Home from '../screens/home';
import Profile from '../screens/profile';
import MyEntries from '../screens/myEntries';
import QuickEntry from '../screens/quickEntry';
import SelectedEntry from '../screens/selectedEntry';
import Settings from '../screens/settings';
import Login from '../screens/login';

import HomeInformation from '../informationScreens/homeInformation';
import QuickEntryInformation from '../informationScreens/quickEntryInformation';
import SituationInformation from '../informationScreens/situationInformation';
import EmotionsInformation from '../informationScreens/emotionsInformation';
import WorryInformation from '../informationScreens/worryInformation';

import Emotions from '../entryScreens/emotion';
import Situation from '../entryScreens/situation';
import Worry from '../entryScreens/worry';
import EntryBeforeSubmit from '../entryScreens/entryBeforeSubmit';

import { AsyncStorage } from 'react-native';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const SituationStack = createStackNavigator();
const EmotionsStack = createStackNavigator();
const WorryStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeDraw = createStackNavigator();
const EntryTabs = createBottomTabNavigator();

//Home screen for the drawer navigation
const HomeDrawScreen = ({ navigation }) => (
  <HomeDraw.Navigator
    screenOptions={{
      headerTitleAlign: 'center'
    }}
  >
    <HomeDraw.Screen
      name='Home'
      component={Home}
      options={{
        gestureEnabled: false,
        headerLeft: () => (
          <MaterialIcons.Button
            name='menu'
            size={35}
            backgroundColor='#81D3F8'
            color='#fff'
            onPress={() => { navigation.openDrawer() }}
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
  </HomeDraw.Navigator>
)

//Profile screen for the drawer navigation
const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center'
    }}
  >
    <ProfileStack.Screen
      name='Profile'
      component={Profile}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            name='menu'
            size={35}
            backgroundColor='#81D3F8'
            color='#fff'
            onPress={() => { navigation.openDrawer() }}
          ></MaterialIcons.Button>
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

//Settings screen for the drawer navigation
const SettingsStackScreen = ({ navigation }) => (
  <SettingsStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center'
    }}
  >
    <SettingsStack.Screen
      name='Settings'
      component={Settings}
      options={{
        headerLeft: () => (
          <MaterialIcons.Button
            name='menu'
            size={35}
            backgroundColor='#81D3F8'
            color='#fff'
            onPress={() => { navigation.openDrawer() }}
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

//Situation screen for the stack navigation 
const SituationScreen = () => (
  <SituationStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center'
    }}
  >
    <SituationStack.Screen
      name='Situation'
      component={Situation}
      options={({ navigation }) => ({
        headerRight: () => (
          <MaterialCommunityIcons.Button
            name='information'
            size={30}
            backgroundColor='#81D3F8'
            color='#fff'
            onPress={() => { navigation.navigate('SituationInformation') }}
          ></MaterialCommunityIcons.Button>
        ),
        headerLeft: () => (
          <MaterialCommunityIcons.Button
            name='delete-forever-outline'
            size={30}
            backgroundColor='#81D3F8'
            color='#fff'
            onPress={() =>
              Alert.alert(
                'Clear Entry',
                'Are you sure you want to delete your current entry?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  {
                    text: 'Yes',
                    onPress: () => { clearStorage({ navigation }) }
                  }
                ],
                { cancelable: false }
              )
            }
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
      })}
    />
    <SituationStack.Screen
      name='SituationInformation'
      component={SituationInformation}
      options={{
        title: 'Situation Help',
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
  </SituationStack.Navigator>
)

//Emotions screen for the stack navigation 
const EmotionsScreen = () => (
  <EmotionsStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center'
    }}
  >
    <EmotionsStack.Screen
      name='Emotions'
      component={Emotions}
      options={({ navigation }) => ({
        headerRight: () => (
          <MaterialCommunityIcons.Button
            name='information'
            size={30}
            backgroundColor='#81D3F8'
            color='#fff'
            onPress={() => navigation.navigate('EmotionsInformation')}
          ></MaterialCommunityIcons.Button>
        ),
        headerLeft: () => (
          <MaterialCommunityIcons.Button
            name='delete-forever-outline'
            size={30}
            backgroundColor='#81D3F8'
            color='#fff'
            onPress={() =>
              Alert.alert(
                'Clear Entry',
                'Are you sure you want to delete your current entry?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  {
                    text: 'Yes',
                    onPress: () => { clearStorage({ navigation }) }
                  }
                ],
                { cancelable: false }
              )
            }
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
      })}
    />
    <EmotionsStack.Screen
      name='EmotionsInformation'
      component={EmotionsInformation}
      options={{
        title: 'Emotions Help',
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
  </EmotionsStack.Navigator>
)

//Worry screen for the stack navigation 
const WorryScreen = () => (
  <WorryStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center'
    }}
  >
    <WorryStack.Screen
      name='Worry'
      component={Worry}
      options={({ navigation }) => ({
        headerRight: () => (
          <MaterialCommunityIcons.Button
            name='information'
            size={30}
            backgroundColor='#81D3F8'
            color='#fff'
            onPress={() => navigation.navigate('WorryInformation')}
          ></MaterialCommunityIcons.Button>
        ),
        headerLeft: () => (
          <MaterialCommunityIcons.Button
            name='delete-forever-outline'
            size={30}
            backgroundColor='#81D3F8'
            color='#fff'
            onPress={() =>
              Alert.alert(
                'Clear Entry',
                'Are you sure you want to delete your current entry?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  {
                    text: 'Yes',
                    onPress: () => { clearStorage({ navigation }) }
                  }
                ],
                { cancelable: false }
              )
            }
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
      })}
    />
    <WorryStack.Screen
      name='WorryInformation'
      component={WorryInformation}
      options={{
        title: 'Worry Help',
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
  </WorryStack.Navigator>
)

//Components to call from the home screen to be able to display the drawer
const HomeDrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen
      name="Home"
      component={HomeDrawScreen}
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
)

//Components to call from the situation screen to be able to display the bottom tabs
const EntryTabsScreen = () => (
  <EntryTabs.Navigator
    initialRouteName='Situation'
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      style: {
        backgroundColor: '#81D3F8',
      },
      labelStyle: {
        fontSize: 15,
        fontFamily: 'montserrat-regular'
      }
    }}
  >
    <EntryTabs.Screen
      name='Situation'
      component={SituationScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" size={24} color="white" />
        )
      }}
    />
    <EntryTabs.Screen
      name='Emotions'
      component={EmotionsScreen}
      options={{
        tabBarIcon: ({ colour, size }) => (
          <MaterialIcons name="mood" size={24} color="white" />
        )
      }}
    />
    <EntryTabs.Screen
      name='Worry'
      component={WorryScreen}
      options={{
        tabBarIcon: ({ colour, size }) => (
          <MaterialCommunityIcons name="cloud" size={24} color="white" />
        )
      }}
    />
  </EntryTabs.Navigator>
)


var clearStorage = async ({ navigation }) => {
  try {
    AsyncStorage.clear()
    navigation.navigate('Home');
    console.log('Storage Cleared')
  } catch (error) {
    console.log(error)
  }
}

//Main navigator called from the App.js
//Used to initialise the main stack, using drawers and tabs when called
export default function Navigator() {
  console.log(`Navigator called from HomeStack`);
  return (
    <NavigationContainer
      screenOptions={{
        headerTitleAlign: 'center',
        textAlign: 'center'
      }}
    >
      <HomeStack.Navigator>
        <HomeStack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name='Home'
          component={HomeDrawerScreen}
          options={{
            headerShown: false
          }}
        />
        <HomeStack.Screen
          name='HomeInformation'
          component={HomeInformation}
          options={{
            headerTitleAlign: 'center',
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
          name='Situation'
          component={EntryTabsScreen}
          options={{
            headerShown: false
          }}
        />
        <HomeStack.Screen
          name='EntryBeforeSubmit'
          component={EntryBeforeSubmit}
          options={{
            headerTitleAlign: 'center',
            headerLeft: () => (
              <MaterialCommunityIcons
                name='sort'
                size={30}
                backgroundColor='#81D3F8'
                color='#81D3F8'
              />
            ),
            title: 'Final Entry',
            headerStyle: {
              backgroundColor: '#81D3F8',
              alignSelf: 'center',
              alignItems: 'center',
              alignContent: 'center'
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
          options={{
            headerTitleAlign: 'center',
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
          name='SelectedEntry'
          component={SelectedEntry}
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() =>
                Alert.alert(
                  'Publish Entry',
                  'Are you sure you want to publish this entry for the therapist to view?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel'
                    },
                    {
                      text: 'Yes',
                      onPress: () => {
                        navigation.navigate('Home')
                      }
                    }
                  ],
                  { cancelable: false }
                )
              }
              >
                <Text style={styles.buttonText}>Publish  </Text>
              </TouchableOpacity>
            ),
            title: 'My Entry',
            headerBackTitle: 'Back',
            headerStyle: {
              backgroundColor: '#81D3F8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'montserrat-bold',
              fontSize: 25,
            }

          })}
        />
        <HomeStack.Screen
          name='QuickEntry'
          component={QuickEntry}
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            headerRight: () => (
              <MaterialCommunityIcons.Button
                name='information'
                size={30}
                backgroundColor='#81D3F8'
                color='#fff'
                onPress={() => navigation.navigate('QuickEntryInformation')}
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
          })}
        />
        <HomeStack.Screen
          name='QuickEntryInformation'
          component={QuickEntryInformation}
          options={{
            headerTitleAlign: 'center',
            title: 'Quick Entry Help',
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
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  entrytitle: {
    paddingLeft: 15,
  },
  textBox: {
    paddingLeft: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    marginTop: 10,
    marginBottom: 20,
    width: '95%',
    textAlign: "left",
    fontSize: 18,
    fontFamily: 'montserrat-regular',
  },
  inputPrediction: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    marginTop: 10,
    marginBottom: 20,
    width: '95%',
    height: 90,
    textAlign: "left",
    fontSize: 18,
    fontFamily: 'montserrat-regular',
  },
  ddmmyyyy: {
    flex: 1,
    flexDirection: "row",
  },
  inputDate: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    marginTop: 10,
    marginBottom: 20,
    width: 96,
    marginRight: 6,
    textAlign: "left",
    fontSize: 18,
    fontFamily: 'montserrat-regular',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'montserrat-regular',
    alignSelf: 'center',
    fontSize: 20
  }
});