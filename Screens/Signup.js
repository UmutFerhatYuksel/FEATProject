import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons'


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
      navigation.navigate('Login'); //it directs Login page temporarily but it should redirect main page or like this
    }
  }, [response])

  async function handleSingInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");

    if (!user) {
      await getUserInfo()
      if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken)
        navigation.navigate('navigate');
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

  return (
    <View style={tw`flex-1 justify-center items-center bg-teal-600`}>

      <View style={tw`w-80 h-130 border-black border-2 rounded-2xl bg-white mx-auto`}>
        <View style={tw`mx-auto mt-20 `}>
          <TextInput
            style={tw`w-60 h-10 bg-slate-50 rounded-full border-2 border-teal-500`}
            placeholder='Email'
            keyboardType='email-address'
          />
        </View>
        <View style={tw`mx-auto mt-8`}>

          <TextInput
            style={tw`w-60 h-10 bg-slate-50 rounded-full border-2 border-teal-500`}
            placeholder='Password'
            secureTextEntry
          />
        </View>
        <View style={tw`mx-auto mt-8`}>

          <TextInput
            style={tw`w-60 h-10 bg-slate-50 rounded-full border-2 border-teal-500`}
            placeholder='Password Again'
            secureTextEntry
          />
        </View>

        <View style={tw`rounded inline`}>
          <TouchableOpacity style={tw`w-30 h-10 bg-teal-500 rounded-full mx-auto mt-5`}>
            <View style={tw`my-auto items-center`}>
              <Text style={styles.textRegular}>Sign Up</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={tw`w-30 h-10 bg-white border-2 border-teal-500 rounded-full mx-auto mt-3`} onPress={() => navigation.navigate('Login')}>
            <View style={tw`my-auto items-center`}>
              <Text style={styles.textRegular}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={tw`w-fit h-10 bg-red-700 rounded-full mx-auto mt-3 flex flex-row`} onPress={propmptAsync}>
            <View style={tw`ml-3 my-auto items-center`}>
              <Text style={styles.textGoogle}>Sign with Google</Text>
            </View>
            <View style={tw`ml-3 mr-3 my-auto items-center`}>
              <Ionicons name='logo-google'></Ionicons>
            </View>
          </TouchableOpacity>

        </View>
        <Text>{JSON.stringify(userInfo)}</Text>
      </View>


    </View>
  );
}