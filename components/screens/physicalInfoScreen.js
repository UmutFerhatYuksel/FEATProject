import React from 'react';
import { StyleSheet, View, Text, Button, StatusBar, TextInput} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-web';

const physicalInfoScreen = ({ navigation, route }) => {
  const {userName} = route.params;
  const {userSurname} = route.params;
  const {userAge} = route.params;
  const {userDailyActivityLevel} = route.params;

  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userGender, setUserGender] = useState("");


  return (
    <SafeAreaView style={styles.container}>
      <Text>Physical Info</Text>

      <Text>Height</Text>
      <TextInput style = {styles.input} value = {userHeight} onChangeText = {setUserHeight}/>
      <Text>Weight: </Text>
      <TextInput style = {styles.input} value = {userWeight} onChangeText = {setUserWeight}/>
      <Text>Gender:</Text>
      <TextInput style = {styles.input} value = {userGender} onChangeText = {setUserGender}/>
  

    
      <Button title="Next" 
      onPress={()=> navigation.navigate("home",{
        name: userName,
        surname: userSurname,
        age: userAge,
        dailyActivityLevel: userDailyActivityLevel,
        weight: userHeight,
        height: userWeight,
        gender: userGender,
      })}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  }
})


export default physicalInfoScreen;