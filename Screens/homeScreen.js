import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from 'twrnc';
const personalInfoScreen = ({navigation, route }) => {
    const {name} = route.params;
    const {surname} = route.params;
    const {age} = route.params;
    const {dailyActivityLevel} = route.params;
    const {height} = route.params;
    const {weight} = route.params;
    const {gender} = route.params;

    // User Information -> {name} {surname} {age} {dailyActivityLevel} {height} {weight} {gender} 

  return (
    <View style ={tw`flex-1 justify-center items-center bg-teal-600`}>
      <Text style={tw`text-white text-3xl font-bold mt-30`}>Home {name} {surname} {age} {dailyActivityLevel} {height} {weight} {gender} </Text>
        <Text></Text>
    </View>
  );
};


export default personalInfoScreen;