import { Image, ImageBackground, ScrollView, Text, View } from 'react-native'
import React from 'react';
import { Card } from "react-native-paper";
import moment from 'moment';
import tw from "twrnc";
import Background from '../assets/Image.png';
import { TouchableOpacity } from 'react-native';

const CurrentProgress=({navigation},route)=> {
  const startOfWeek = moment().startOf("isoWeek");
  const today = moment();

  const daysOfWeek = Array.from({ length: 7 }, (_, index) =>
    startOfWeek.clone().add(index, 'days')
  );

  return (

    <View>

      <View style={tw`w-fit flex flex-row mx-auto my-5`}>
        <ScrollView horizontal="true">
          {daysOfWeek.map((day, index) => (
            <View style={[tw`px-2 mx-2 rounded-lg`, index === 1 || index === 3 || index === 5 ? tw`border border-indigo-700` : null, day.isSame(today, 'day') ? tw`bg-green-400` : null]}>
              <Text style={tw`text-center text-2xl`}>{day.format('DD')}</Text>
              <Text style={tw`text-sm`}>{day.format('ddd')}</Text>
            </View>
          ))}

        </ScrollView>

      </View>
      <Text style={tw`text-2xl px-3 font-semibold text-indigo-700`}>Today</Text>
      <Text style={tw`text-sm my-2 px-3 text-indigo-700`}>Burası Senin beslenme ve antrenman serüvenin</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('CurrentWorkout')}>
        <ImageBackground source={Background} style={[tw`w-80 h-60 rounded-full mx-auto`]} imageStyle={{borderRadius:10}}>
          <View style={tw`my-40`}>
            <Text style={tw`text-3xl text-white text-center`}>Your Daily Activity Plan</Text>
            <Text style={tw`tex-sm font-thin text-white text-center`}>500kcal</Text>
          </View>

        </ImageBackground>

      </TouchableOpacity>
      <Text style={tw`text-2xl px-3 font-semibold text-indigo-700`}>Today's meal program</Text>
      <View style={tw`w-80 h-20 border border-black rounded-full my-10 mx-auto`}></View>
      <View style={tw`w-80 h-20 border border-black rounded-full my-10 mx-auto`}></View>

    </View>
  );
};

export default CurrentProgress;