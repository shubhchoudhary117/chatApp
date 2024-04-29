import React from 'react'
import { Text, View } from 'react-native'
import UpdatesScreen from "./App/Screens/UpdatesScreen/UpdatesScreen"
import SettingsHomeScreen from './App/Screens/SettingsScreens/SettingsHomeScreen/SettingsHomeScreen'
import GroupsScreen from './App/Screens/GroupsScreen/GroupsScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

const App = () => {
  return <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={GroupsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  </>
}

export default App
