import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import welcomeScreen from './components/screens/welcomeScreen';
import personalInfoScreen from './components/screens/personalInfoScreen';
import physicalInfoScreen from './components/screens/physicalInfoScreen';
import homeScreen from './components/screens/homeScreen';
// Import your tutorial screens

const Stack = createNativeStackNavigator();

export default function App() {
 


  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='welcome'>
      <Stack.Screen name = "welcome" component={welcomeScreen}/>
      <Stack.Screen name = "personalInfo" component={personalInfoScreen}/>
      <Stack.Screen name = "physicalInfo" component={physicalInfoScreen}/>
      <Stack.Screen name = "home" component={homeScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}