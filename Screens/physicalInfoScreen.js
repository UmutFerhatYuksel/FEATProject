import React from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-web';
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

const physicalInfoScreen = ({ navigation, route }) => {
  const { userName } = route.params;
  const { userSurname } = route.params;
  const { userAge } = route.params;
  const { userDailyActivityLevel } = route.params;

  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userGender, setUserGender] = useState("");


  return (
    <SafeAreaView >
      <View style={tw`mx-auto h-fit mt-20`}>
        <Text style={tw`text-3xl font-bold text-indigo-700 text-center leading-loose`}>Physical Information</Text>

        <TextInput
          label={"Height(Cm)"}
          value={userHeight}
          onChangeText={height => setUserHeight(height)}
          mode='outlined'
          style={tw`w-80 h-15 mt-8`}
        />

        <TextInput
          label={"Weight(Kg)"}
          value={userWeight}
          onChangeText={weight => setUserSurname(weight)}
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
        <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700  font-bold rounded-full mx-auto mt-8`}
          onPress={() => navigation.navigate("CurrentProgress", {
            userName: userName,
            userSurname: userSurname,
            userAge: userAge,
            userDailyActivityLevel: userDailyActivityLevel,
          })}>
          <View style={tw`ml-3 my-auto items-center mr-3`}>
            <Text style={styles.textRegular}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};




export default physicalInfoScreen;