import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import tw from 'twrnc';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { useFonts } from 'expo-font';
import { Button, Text, TextInput } from 'react-native-paper';




const styles = StyleSheet.create(
  {
    textRegular: {
      fontFamily: "Raleway_400Regular",
    },
    textGoogle: {
      fontFamily: "Raleway_400Regular",
      color: "white"
    }
  }
)



export function Login({ navigation }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const responseData = await response.json(); // Parse the response body as JSON
        console.log('Response Data:', responseData);
  
        const userId = responseData.userId;
        const personalInfoExists = responseData.personalInfoExists;
  
        console.log('User ID:', userId);
        console.log('Personal Info Exists:', personalInfoExists);
  
        if (userId !== null) {
          if (personalInfoExists) {
            // Personal info exists, navigate to the CurrentWorkout page
            navigation.navigate('CurrentWorkout', { userId });
          } else {
            // Personal info does not exist, navigate to the personal info page
            navigation.navigate('personalInfo', { userId });
          }
        } else {
          // Handle error
          throw new Error('Invalid user ID received');
        }
      } else if (response.status === 401) {
        // Unauthorized: Incorrect email or password
        alert('Incorrect email or password');
      } else {
        // Other errors
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle other errors
      alert('An error occurred during login. Please try again later.');
    }
  };

  return (

    <View style={tw`h-full`}>
      <Text style={tw`text-3xl font-bold text-indigo-700 text-center leading-loose`}>Login</Text>

      <View style={tw`w-full h-100 mx-auto mt-8`}>
        <View style={tw`mx-auto mt-20 w-content`}>
          <TextInput
            label={"Email"}
            value={email}
            onChangeText={email => setEmail(email)}
            mode='outlined'
            style={tw`w-80 h-15`}
          />
        </View>
        <View style={tw`mx-auto mt-8`}>

          <TextInput
            label={"Password"}
            value={password}
            onChangeText={password => setPassword(password)}
            mode='outlined'
            secureTextEntry
            style={tw`w-80 h-15`}
          />

        </View>

        
        <View style={tw`rounded inline`}>
          <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700 rounded-full mx-auto mt-8`}>
            <View style={tw`my-auto items-center`}>
              <Text style={tw`text-center text-white font-bold`} onPress={handleLogin}>Login with Email</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', width: "auto", marginTop: 40 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <View>
            <Text style={{ width: "auto", textAlign: 'center' }}>Or Continue With</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>

        <View style={tw`rounded inline`}>
          <TouchableOpacity style={tw`w-65 h-15 bg-white rounded-full mx-auto mt-8 flex flex-row`}>
            <View style={tw`my-5 mx-8 items-center`}>
              <Text style={tw`text-center font-bold`}>Login with Google</Text>
            </View>
            <View style={tw`my-5 mx-8 items-center`}>
              <Image style={{ width: 20, height: 20 }} source={require('../assets/google.png')} />
            </View>
          </TouchableOpacity>

          <Text onPress={()=>navigation.navigate("Signup")} style={tw`text-sm  text-indigo-700 text-center leading-loose`}>Don't have account yet? Register</Text>

        </View>

      </View>
    </View>

  );
}