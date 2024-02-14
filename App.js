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
import homeScreen from './Screens/homeScreen';



const Stack =createNativeStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app 31</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Signup'
      >
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          
        />
      <Stack.Screen name = "welcome" component={welcomeScreen}/>
      <Stack.Screen name = "personalInfo" component={personalInfoScreen}/>
      <Stack.Screen name = "physicalInfo" component={physicalInfoScreen}/>
      <Stack.Screen name = "home" component={homeScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily:'Cabin_Condensed-Medium'
  }
});
