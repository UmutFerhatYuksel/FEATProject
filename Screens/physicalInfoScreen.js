import React from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import tw from 'twrnc';
import { Picker } from '@react-native-picker/picker';
import { RadioButton, Button, TextInput } from 'react-native-paper';
// import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';

const styles = StyleSheet.create(
  {
    textRegular: {
      fontFamily: "Raleway_400Regular",
      color: "white",
    },

  }
)

const PhysicalInfoScreen = ({ navigation, route }) => {
  const { userName } = route.params;
  const { userSurname } = route.params;
  const { userAge } = route.params;
  const { userDailyActivityLevel } = route.params;


  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userExperienceLevel, setuserExperienceLevel] = useState();

  // Bursaı db ye kayıt

  const handleComplete = () => {
    navigation.navigate("physicalInfo", {
      userName: userName,
      userSurname: userSurname,
      userAge: userAge,
      userDailyActivityLevel: userDailyActivityLevel,
      userId: userId, // Pass userId to the next screen if needed

    })

  }


  const handleUserData = async () => {
    console.log("USER ID:" + typeof userId);
    console.log("USER NAME:" + typeof userName);
    console.log("USER SURNAME:" + typeof userSurname);
    console.log("USER AGE:" + typeof userAge);
    console.log("USER DAILY ACTIVITY LEVEL:" + typeof userDailyActivityLevel);
    console.log("USER WEIGHT:" + typeof userWeight);
    console.log("USER HEIGHT:" + typeof userHeight);
    console.log("USER GENDER:" + typeof userGender);
    console.log("USER EXPERIENCE LEVEL:" + typeof userExperienceLevel);

    try {
      const response = await fetch('http://localhost:8080/api/physical-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId, // int
          userName: userName, // string
          userSurname: userSurname, //string
          userAge: userAge, // int
          userDailyActivityLevel: userDailyActivityLevel, // int
          userHeight: userHeight, // int
          userWeight: userWeight, // float
          userGender: userGender, // string
          userExperienceLevel: userExperienceLevel, // string but it is
        }),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Physical info submitted successfully");
        // Show alert message
        alert("Your personal information is saved to the database");

        // Refresh the page
        window.location.reload();
      } else {
        // Handle other errors
        throw new Error('Physical info submission failed');
      }
    } catch (error) {
      console.error('Error submitting physical info:', error);
      // Handle error
    }
  };


  return (
    <SafeAreaView >
      <View style={tw`mx-auto h-fit mt-20`}>
        <Text style={tw`text-3xl font-bold text-indigo-700 text-center leading-loose`}>Physical Information</Text>

        <TextInput
          label={"Height(Cm)"}
          value={userHeight}
          onChangeText={height => setUserHeight(parseInt(height))}
          mode='outlined'
          style={tw`w-80 h-15 mt-8`}
        />

        <TextInput
          label={"Weight(Kg)"}
          value={userWeight}
          onChangeText={weight => setUserWeight(parseFloat(weight))}
          mode='outlined'
          style={tw`w-80 h-15 mt-8`}
        />

        {/*
<TextInput
  label={"Gender"}
  value={userGender}
  onChangeText={gender => setUserGender(gender)}
  mode='outlined'
  style={tw`w-80 h-15`}
/> */}

        <RadioButton.Group onValueChange={gender => setUserGender(gender)} value={userGender}>
          <View style={tw`flex flex-row mt-3 mx-auto`}>
            <View style={tw`px-3`}>
              <Text style={tw`text-center`}>Male</Text>
              <RadioButton value={"male"} />
            </View>
            <View style={tw`px-3`}>
              <Text style={tw`text-center`}>Female</Text>
              <RadioButton value={"female"} />
            </View>
          </View>
        </RadioButton.Group>

        <RadioButton.Group onValueChange={level => setuserExperienceLevel(level)} value={userExperienceLevel}>
          <View style={tw`flex flex-row mt-3 mx-auto`}>
            <View style={tw`px-3`}>
              <Text style={tw`text-center`}>Beginner</Text>
              <RadioButton value={"beginner"} />
            </View>
            <View style={tw`px-3`}>
              <Text style={tw`text-center`}>Intermediate</Text>
              <RadioButton value={"intermediate"} />
            </View>
            <View style={tw`px-3`}>
              <Text style={tw`text-center`}>Advanced</Text>
              <RadioButton value={"advanced"} />
            </View>
          </View>
        </RadioButton.Group>
        <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700  font-bold rounded-full mx-auto mt-8`}
          onPress={handleComplete}>
          <View style={tw`ml-3 my-auto items-center mr-3`}>
            <Text style={styles.textRegular} onPress={handleUserData}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};




export default PhysicalInfoScreen;