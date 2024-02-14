import React from 'react';
import { View, Text, Button } from 'react-native';

const welcomeScreen = ({ navigation }) => {


  return (
    <View >
      <Text >Home Screen</Text>
      <Text>Welcome to FEAT!</Text>
      <Button title="Get Started" onPress={()=> navigation.navigate("personalInfo")} />
    </View>
  );
};

export default welcomeScreen;