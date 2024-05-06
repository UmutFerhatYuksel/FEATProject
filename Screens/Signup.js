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
import { FIREBASE_AUTH } from '../firebase';
import { db } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';



WebBrowser.maybeCompleteAuthSession();

const auth = FIREBASE_AUTH;

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

  const [fontsLoaded] = useFonts({
    Raleway_400Regular
  })

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();


  useEffect(() => {
    const interval = setInterval(async () => {
      if (auth.currentUser) {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          clearInterval(interval);
          setDoc(doc(db, 'User', auth.currentUser.uid), {
            email: auth.currentUser.email
          }).catch((e)=>{
            console.log(e);
          });
          navigation.navigate("PersonalInfo", { email: email, password: password });
        }
      }
    }, 5000); // checks every 5 seconds
  
    return () => clearInterval(interval);
  }, []);

  const handleSignUp = async () => {

    if (passwordCheck !== password) {

      alert("Given Passwords are not same");
    } else {
      try {

        let response = await createUserWithEmailAndPassword(auth, email, password);

        if (response) {

          await sendEmailVerification(response.user);

          alert("Email verification has been send to your mail adress please verify");


          console.log(response)

        }
      } catch (error) {
        console.error("Error")
        alert(error);
      }
    }

  };


  return (



    <View style={tw`h-full`}>
      <Text style={tw`text-3xl font-bold text-indigo-700 text-center leading-loose`} >Sign In</Text>

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
            value={passwordCheck}
            onChangeText={password => setPasswordCheck(password)}
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