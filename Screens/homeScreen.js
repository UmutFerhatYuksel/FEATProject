import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from twrnc;
const personalInfoScreen = ({navigation, route }) => {
    const {name} = route.params;
    const {surname} = route.params;
    const {age} = route.params;
    const {dailyActivityLevel} = route.params;
    const {height} = route.params;
    const {weight} = route.params;
    const {gender} = route.params;

  return (
    <View >
      <Text>Home {name} {surname} {age} {dailyActivityLevel} {height} {weight} {gender}</Text>
        <Text></Text>
    </View>
  );
};


export default personalInfoScreen;