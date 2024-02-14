import React from 'react';
import {StyleSheet, View, Text, Button, StatusBar, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { useState } from 'react';
const personalInfoScreen = ({ navigation, route }) => {

  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userDailyActivityLevel, setUserDailyActivityLevel] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Personal Info</Text>
      <Text>Name: </Text>
      <TextInput style = {styles.input} value = {userName} onChangeText = {setUserName}/>
      <Text>Surname: </Text>
      <TextInput style = {styles.input} value = {userSurname} onChangeText = {setUserSurname}/>
      <Text>Age:</Text>
      <TextInput style = {styles.input} value = {userAge} onChangeText = {setUserAge}/>
      <Text>Daily Activity Level: </Text>
      <TextInput style = {styles.input} value = {userDailyActivityLevel} onChangeText = {setUserDailyActivityLevel}/>

    
      <Button title="Get Started" 
      onPress={()=> navigation.navigate("physicalInfo",{
        userName: userName,
        userSurname: userSurname,
        userAge: userAge,
        userDailyActivityLevel: userDailyActivityLevel,
      })}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  }
})

export default personalInfoScreen;