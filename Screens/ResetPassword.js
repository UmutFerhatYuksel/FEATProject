import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import tw from 'twrnc';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { useFonts } from 'expo-font';
import { Button, Text, TextInput } from 'react-native-paper';
import { FIREBASE_AUTH } from '../firebase';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';




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



export function ResetPassword({ navigation }) {

    const [email, setEmail] = useState();
    const auth = FIREBASE_AUTH;

    const handleResetPassword = async (email) => {

        if(!email){
            alert("Mail field cannot be empty");
        }else{
            
            try {
                await sendPasswordResetEmail(auth, email);
                alert('Password reset email sent! Check your email to reset your password.');
            } catch (error) {
                console.error('Failed to send password reset email: ', error);
                alert('Failed to send password reset email. Please try again later.');
            }
        }
    };
    return (

        <View style={tw`h-full`}>


            <View style={tw`w-full h-100 mx-auto mt-8`}>
                <Text style={tw`text-3xl font-bold text-indigo-700 text-center leading-loose`}>Reset Password</Text>
                <View style={tw`mx-auto mt-20 w-content`}>
                    <TextInput
                        label={"Email"}
                        value={email}
                        onChangeText={email => setEmail(email)}
                        mode='outlined'
                        style={tw`w-80 h-15`}
                    />
                </View>


                <View style={tw`rounded inline`}>
                    <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700 rounded-full mx-auto mt-8`} onPress={() => handleResetPassword(email)}>
                        <View style={tw`my-auto items-center`}>
                            <Text style={tw`text-center text-white font-bold`} >Send reset link</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    );
}