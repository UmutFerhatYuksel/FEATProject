import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'twrnc';

const styles = StyleSheet.create(
  {
    textRegular: {
      fontFamily: "Raleway_400Regular",
      color: "teal",
    },
  }
)
const welcomeScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1 justify-between items-center bg-teal-600 `}>
      <Text style={tw`text-white text-3xl font-bold mt-30`}>Welcome to FEAT!</Text>
      <View style={tw`flex-1 justify-center`}>
      <TouchableOpacity style={tw`w-fit h-10 bg-white rounded-full mx-auto mt-3 flex flex-row`} onPress={()=> navigation.navigate("personalInfo")}>
            <View style={tw`ml-3 my-auto items-center mr-3`}>
              <Text style={styles.textRegular}>Get Started</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default welcomeScreen;
