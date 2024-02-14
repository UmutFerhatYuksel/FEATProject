import React from 'react';
import {StyleSheet, View, Text, Button, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { useState } from 'react';
import tw from 'twrnc';

const styles = StyleSheet.create(
  {
    textRegular: {
      fontFamily: "Raleway_400Regular",
      color: "teal",
    },
  
  }
)

const personalInfoScreen = ({ navigation, route }) => {

  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userDailyActivityLevel, setUserDailyActivityLevel] = useState("");

  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center bg-teal-600`}>
      <Text style = {tw`white`}>Personal Info</Text>

      <TextInput value = {userName} onChangeText = {setUserName}
      style={tw`w-60 h-10 bg-slate-50 rounded-full border-2 border-teal-500`}
      placeholder = 'Name'/>

      <TextInput value = {userSurname} onChangeText = {setUserSurname}
      style={tw`w-60 h-10 bg-slate-50 rounded-full border-2 border-teal-500`}
      placeholder = 'Surname'/>

      <TextInput value = {userAge} onChangeText = {setUserAge}
      style={tw`w-60 h-10 bg-slate-50 rounded-full border-2 border-teal-500`}
      placeholder = 'Age'/>
      
      <TextInput value = {userDailyActivityLevel} onChangeText = {setUserDailyActivityLevel}
      style={tw`w-60 h-10 bg-slate-50 rounded-full border-2 border-teal-500`}
      placeholder = 'Daily Activity Level'/>

    
      <TouchableOpacity style={tw`w-fit h-10 bg-white rounded-full mx-auto mt-3 flex flex-row`} 
          onPress={()=> navigation.navigate("physicalInfo",{
            userName: userName,
            userSurname: userSurname,
            userAge: userAge,
            ailyActivityLevel: userDailyActivityLevel,
          })}>
            <View style={tw`ml-3 my-auto items-center mr-3`}>
              <Text style={styles.textRegular}>Next</Text>
            </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};



export default personalInfoScreen;