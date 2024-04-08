import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';
import tw from 'twrnc';
import { Picker } from '@react-native-picker/picker';
import { TextInput, Text } from 'react-native-paper';
import { Slider } from '@miblanchard/react-native-slider';
import { useSharedValue } from 'react-native-reanimated';

const styles = StyleSheet.create(
  {
    textRegular: {
      fontFamily: "Raleway_400Regular",
      color: "white",
    },
  }
)

const PersonalInfoScreen = ({ navigation, route }) => {

  const { userId } = route.params; // Extract userId from route.params

  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userAge, setUserAge] = useState();
  const [userDailyActivityLevel, setUserDailyActivityLevel] = useState("");

  const handleComplete = () => {
    navigation.navigate("PhysicalInfo", {
      userName: userName,
      userSurname: userSurname,
      userAge: userAge,
      userDailyActivityLevel: userDailyActivityLevel,
    })
    console.log(userAge);
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
        label={"Age"}
        value={userAge}
        onChangeText={name => setUserAge(parseInt(name))}
        mode='outlined'
        style={tw`w-80 h-15`}
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

      {/* <TextInput value = {userDailyActivityLevel} onChangeText = {setUserDailyActivityLevel}
      style={tw`w-60 h-10 bg-slate-50 rounded-full border-2 border-teal-500`}
      placeholder = 'Daily Activity Level'/> */}
      {/* <Picker selectedValue={userDailyActivityLevel} style={tw`mt-10`}
        onValueChange={(itemValue, itemIndex) => setUserDailyActivityLevel(itemValue)}
      >
        <Picker.Item label='sedentary' value={1.2} />
        <Picker.Item label='Lightyl Active' value={1.375} />
        <Picker.Item label='Moderetaly Active' value={1.55} />
        <Picker.Item label='Very Active' value={1.725} />

      </Picker> */}

      <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700  font-bold rounded-full mx-auto mt-8`}
        onPress={() => navigation.navigate("PhysicalInfo", {
          userName: userName,
          userSurname: userSurname,
          userAge: userAge,
          userDailyActivityLevel: userDailyActivityLevel,
          userId: userId,
        })}>
        <View style={tw`ml-3 my-auto items-center mr-3`}>
          <Text style={styles.textRegular}>Complete</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>


  );

  console.log("User ID:", userId); // Log userId to the console

};



export default PersonalInfoScreen;
