import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react';
import tw from 'twrnc';

export function Signup({navigation}) {
  return (
    <View style={tw`flex-1 justify-center items-center bg-teal-600`}>

      <View style={tw`w-80 h-100 border-black border-2 rounded-2xl bg-white mx-auto`}>
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
              <Text>Sign Up</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={tw`w-30 h-10 bg-white border-2 border-teal-500 rounded-full mx-auto mt-3`} onPress={()=>navigation.navigate('Login')}>
            <View style={tw`my-auto items-center`}>
              <Text>Login </Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </View>


    </View>
  );
}