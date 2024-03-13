import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Screens/Login';
import { Signup } from './Screens/Signup';
import welcomeScreen from './Screens/welcomeScreen';
import personalInfoScreen from './Screens/personalInfoScreen';
import physicalInfoScreen from './Screens/physicalInfoScreen';
import CreateWorkoutScreen from './Screens/CreateWorkoutScreen';
import ChooseDayScreen from './Screens/ChooseDayScreen';
import { PaperProvider } from "react-native-paper"
import HomeScreen from './Screens/HomeScreen';
import CurrentWorkout from './Screens/CurrentWorkout';
import CurrentProgress from './Screens/CurrentProgress';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <React.StrictMode>

        <NavigationContainer >
          <Stack.Navigator
            initialRouteName='Login'
          >
            <Stack.Screen
              name='Login'
              component={Login}
            />
            <Stack.Screen
              name='Signup'
              component={Signup}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="personalInfo" component={personalInfoScreen} />
            <Stack.Screen name="physicalInfo" component={physicalInfoScreen} />
            <Stack.Screen name="CreateWorkout" component={CreateWorkoutScreen} />
            <Stack.Screen name='ChooseDay' component={ChooseDayScreen} />
            <Stack.Screen name='Welcome' component={welcomeScreen} />
            <Stack.Screen name='CurrentProgress' component={CurrentProgress}/>
            <Stack.Screen name='CurrentWorkout' component={CurrentWorkout}/>

          </Stack.Navigator>
        </NavigationContainer>
      </React.StrictMode>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Cabin_Condensed-Medium'
  }
});
