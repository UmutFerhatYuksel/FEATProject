import React from 'react';
import { StyleSheet, View, Text, Button, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-web';
import tw from 'twrnc';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create(
  {
    textRegular: {
      fontFamily: "Raleway_400Regular",
      color: "teal",
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
    <SafeAreaView style={tw`flex-1 justify-center items-center bg-teal-600`}>
      <Text>Physical Info</Text>

      <TextInput style={tw`w-60 h-10 bg-slate-50 rounded-full border-2 border-teal-500`}
        value={userHeight} onChangeText={setUserHeight}
        placeholder='Height with CM' />

      <TextInput style={tw`w-60 h-10 bg-slate-50 rounded-full border-2 border-teal-500`}
        value={userWeight} onChangeText={setUserWeight}
        placeholder='Weight with KG' />

      <Picker selectedValue={userGender} style={tw`mt-10`}
        onValueChange={(itemValue, itemIndex) => setUserGender(itemValue)}
      >
        <Picker.Item label='Male' value={"male"} />
        <Picker.Item label='Female' value={"female"} />

      </Picker>

      <TouchableOpacity style={tw`w-fit h-10 bg-white rounded-full mx-auto mt-3 flex flex-row`}
        onPress={() => navigation.navigate("home", {
          name: userName,
          surname: userSurname,
          age: userAge,
          userDailyActivityLevel: userDailyActivityLevel,
          weight: userHeight,
          height: userWeight,
          gender: userGender,
        })}>
        <View style={tw`ml-3 my-auto items-center mr-3`}>
          <Text style={styles.textRegular}>Next</Text>
        </View>
      </TouchableOpacity>


    </SafeAreaView>
  );
};




export default physicalInfoScreen;