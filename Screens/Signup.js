import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, TextInput } from 'react-native-paper';


WebBrowser.maybeCompleteAuthSession();

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
export function Signup({ navigation }) {
  const [userInfo, setUserInfo] = useState(null); //It contains username when login with your google account
  const [request, response, propmptAsync] = Google.useAuthRequest({
    androidClientId: "534817386575-j8b4rapsg709o772gdgdquj7gic59sfj.apps.googleusercontent.com",
    webClientId: "534817386575-h5n0e44v2sue2q71clqalht59gkkdl19.apps.googleusercontent.com"
  });

  const [fontsLoaded] = useFonts({
    Raleway_400Regular
  })

  useEffect(() => {
    handleSingInWithGoogle();

    if (userInfo !== null) {
      navigation.navigate('welcome'); //it directs Login page temporarily but it should redirect main page or like this
    }
  }, [response])

  async function handleSingInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");

    if (!user) {
      await getUserInfo()
      if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken)

        navigation.navigate('welcome');
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;

    try {
      const response = await fetch(
        "https:/www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));

      setUserInfo(user);
    } catch (error) {

    }
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const[name,setName]=useState();


  const handleSignUp = async () => {
    try {
        const response = await fetch('http://localhost:8080/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          console.log(response.ok);
          // Show alert message
          alert("You registered to the system successfully");
    
          // Refresh the page
          window.location.reload();
        } else if (response.status === 400) {
            // User with this email already exists (status code 400)
            alert('This email already exists');
        } else {
            // Handle other errors
            throw new Error('Registration failed');
        }
    } catch (error) {
        console.error('Error signing up:', error);
        // Handle other errors
        alert('An error occurred during registration. Please try again later.');
    }
};

  

  return (



    <View style={tw`h-full`}>
      <Text style={tw`text-3xl font-bold text-indigo-700 text-center leading-loose`} >Login</Text>

      <View style={tw`w-full h-100 mx-auto mt-8`}>
        <View style={tw`mx-auto mt-8 w-content`}>
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

        <View style={tw`mx-auto mt-8`}>

          <TextInput
            label={"Password again"}
            value={password}
            onChangeText={password => setPassword(password)}
            mode='outlined'
            secureTextEntry
            style={tw`w-80 h-15`}
          />

        </View>

        <View style={tw`rounded inline`}>
          <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700 rounded-full mx-auto mt-8`} onPress={handleSignUp}>
            <View style={tw`my-auto items-center`}>
              <Text style={tw`text-center text-white font-bold`}>Register</Text>
            </View>
          </TouchableOpacity>

        </View>


      </View>
    </View>

  );
}