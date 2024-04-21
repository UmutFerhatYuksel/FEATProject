import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import tw from 'twrnc';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { useFonts } from 'expo-font';
import { Button, Text, TextInput } from 'react-native-paper';
import { FIREBASE_AUTH } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';




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
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {

    try {
      let response = await signInWithEmailAndPassword(auth, email, password);

      if (response) {

        navigation.navigate("CurrentProgress", { email: email, password: password });

        console.log(response)

      }
    } catch (error) {
      console.error("Error")
      alert(error);
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
          <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700 rounded-full mx-auto mt-8`} onPress={handleLogin}>
            <View style={tw`my-auto items-center`}>
              <Text style={tw`text-center text-white font-bold`} >Login with Email</Text>
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

          <Text onPress={() => navigation.navigate("Signup")} style={tw`text-sm  text-indigo-700 text-center leading-loose`}>Don't have account yet? Register</Text>

        </View>

      </View>
    </View>

  );
}