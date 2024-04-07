import { Image, ImageBackground, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Card } from "react-native-paper";
import moment from 'moment';
import tw from "twrnc";
import Background from '../assets/Image.png';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { FIREBASE_AUTH, db } from '../firebase';
import { QuerySnapshot, addDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { useIsFocused } from '@react-navigation/native';


const CurrentProgress = ({ navigation, route }) => {


  let Exercises = [];
  let Days=[];
  const currentDate = new Date();
  const options = { weekday: 'long' }
  const currentDay = currentDate.toLocaleDateString('en-US', options);



  const ifocused = useIsFocused();
  useEffect(() => {

    if (ifocused) {
      getInitialData()
    }



  }, [ifocused])

  const getInitialData = async () => {

    const currentUser = FIREBASE_AUTH.currentUser;
    const userInfoRef = doc(db, "User", currentUser.uid);
    const newCollectionRef = collection(userInfoRef, "UserInfo");

    getDocs(newCollectionRef).then((querySnapshot) => {
      querySnapshot.forEach((item) => {

        const dayCollectionRef = doc(newCollectionRef, item.id);
        const subCollectionRef = collection(dayCollectionRef, "Day");

        getDocs(subCollectionRef).then((querySnapshot) => {
          querySnapshot.forEach((day) => {
            console.log(day.id, " => ", day.data());

            if (currentDay === day.data().name) {
              const exerciseCollectionRef = doc(subCollectionRef, day.id);
              const ExercisesubCollectionRef = collection(exerciseCollectionRef, "Exercise");

              getDocs(ExercisesubCollectionRef).then((snapshot) => {
                snapshot.forEach((exercise) => {
                  console.log(exercise.id, " => ", exercise.data());

                  Days.push(exercise.data().name);


                  Exercises.push(exercise.data());


                })
              })
            }


          })
        })
      })
    })

  }


  const startOfWeek = moment().startOf("isoWeek");
  const today = moment();

  const daysOfWeek = Array.from({ length: 7 }, (_, index) =>
    startOfWeek.clone().add(index, 'days')
  );

  console.log(Days);

  // exerciseList database'den gelecek
  // var exerciseList = Exercises;




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

      <TouchableOpacity onPress={() => navigation.navigate('CurrentWorkout', { Exercises: Exercises })}>
        <ImageBackground source={Background} style={[tw`w-80 h-60 rounded-full mx-auto`]} imageStyle={{ borderRadius: 10 }}>
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