import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';
import tw from 'twrnc';
import { Picker } from '@react-native-picker/picker';
import { TextInput, Text } from 'react-native-paper';
import { Slider } from '@miblanchard/react-native-slider';
import { useSharedValue } from 'react-native-reanimated';

const PersonalInfoScreen = ({ navigation, route }) => {

  const { email } = route.params;
  const { password } = route.params;

  const [userName, setUserName] = useState();
  const [userSurname, setUserSurname] = useState();
  const [userAge, setUserAge] = useState();
  const [userDailyActivityLevel, setUserDailyActivityLevel] = useState("");



  useEffect(() => {

    const backAction = () => {

      return true;
    };

    BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

  }, [])


  const handleComplete = () => {

    if (!userName || !userSurname || !userAge || !userDailyActivityLevel) {
      alert("Please fill in all required fields");

    } else {
      if(userAge > 13 && userAge < 100 ){

        navigation.navigate("PhysicalInfo", {
          userName: userName,
          userSurname: userSurname,
          userAge: userAge,
          userDailyActivityLevel: userDailyActivityLevel,
          email: email,
          password: password
        })
        console.log(userAge);
      }else{
        alert("Values Should between the range")
      }

    }
  }


  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center`}>

      <Text style={tw`text-3xl font-bold text-indigo-700 text-center leading-loose`}>Personal Information</Text>
      <TextInput
        label={"Name"}
        value={userName}
        onChangeText={name => setUserName(name)}
        mode='outlined'
        style={tw`w-80 h-15`}
      />

      <TextInput
        label={"Surname"}
        value={userSurname}
        onChangeText={name => setUserSurname(name)}
        mode='outlined'
        style={tw`w-80 h-15`}
      />


      <TextInput
        label={"Age (13-100)"}
        value={userAge}
        onChangeText={name => setUserAge(parseInt(name))}
        mode='outlined'
        style={tw`w-80 h-15`}
        keyboardType='numeric'
      />

      <View style={tw`w-60 mt-8`}>
        <Text style={tw`text-center font-bold text-indifo-700`}>Your Activity Level:{userDailyActivityLevel}</Text>
        <Slider
          value={userDailyActivityLevel}
          onValueChange={value => setUserDailyActivityLevel(parseInt(value))}
          minimumValue={0}
          maximumValue={5}
          thumbTintColor='purple'
          step={1}
        />
      </View>

      <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700  font-bold rounded-full mx-auto mt-8`}
        onPress={handleComplete}>
        <View style={tw`ml-3 my-auto items-center mr-3`}>
          <Text style={styles.textRegular}>Complete</Text>
        </View>
      </TouchableOpacity>

      
    </SafeAreaView>


  );

  console.log("User ID:", userId); // Log userId to the console

};

const styles = StyleSheet.create({
  container: { padding: 16 },
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
})


export default PersonalInfoScreen;
