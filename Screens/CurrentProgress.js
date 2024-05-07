import { ImageBackground, Text, View, Platform } from 'react-native'
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import tw from "twrnc";
import Background from '../assets/Image.png';
import Background2 from '../assets/meal.png';
import Background3 from '../assets/Gym.png';
import { TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH, db } from '../firebase';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

const CurrentProgress = ({ navigation, route }) => {


  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDay = days[currentDate.getDay()];
  let Days = [];
  let CompletedDays = [];
  let notCompletedDays = [];
  const [indexes, setIndexes] = useState([]);
  const [completedIndexes, setCompletedIndexes] = useState([])
  const [notCompletedIndexes, setNotCompletedIndexes] = useState([])
  const [expoPushToken, setExpoPushToken] = useState('');



  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    })
  })





  useEffect(() => {


    console.log("CURRENT", currentDate.getDay());

    const unsubscribe = navigation.addListener('focus', () => {

      registerForPushNotificationsAsync()
        .then((token) => {
          if (token) {
            setExpoPushToken(token);
            console.log("TOKEN", token);

            // Now use the token directly instead of relying on the updated state
            sendPushNotification(token).catch(err => {
              console.error("Failed to send notification:", err);
            });
          } else {
            console.log("No token received");
          }
        })
        .catch(err => {
          console.error("Error registering for notifications:", err);
        });


      // sendPushNotification().catch((e)=>{
      //   console.log(e,"Error")
      // });



      const currentUser = FIREBASE_AUTH.currentUser;

      console.log("Useffect Called")

      const userInfoRef = doc(db, "User", currentUser.uid);
      const newCollectionRef = collection(userInfoRef, "UserInfo");

      getDocs(newCollectionRef).then((querysnapshot) => {
        querysnapshot.forEach((item) => {

          const dayCollectionRef = doc(newCollectionRef, item.id);
          const subCollectionRef = collection(dayCollectionRef, "Day");

          CompletedDays = [];
          notCompletedDays = [];
          futureDays = [];
          Days = [];

          getDocs(subCollectionRef).then((querysnapshot) => {
            querysnapshot.forEach((day) => {

              console.log(currentDay);

              // if (currentDay === "Monday") {

              //   updateDoc(day.ref, { isComplete: false }); //Değişebilir

              //   const exerciseCollectionRef = doc(subCollectionRef, day.id);
              //   const ExercisesubCollectionRef = collection(exerciseCollectionRef, "Exercise");

              //   getDocs(ExercisesubCollectionRef)
              //     .then((querySnapshot) => {
              //       querySnapshot.forEach((doc) => {

              //         const exerciseDocRef = doc.ref;

              //         updateDoc(exerciseDocRef, { isComplete: false });
              //       });
              //     })
              //     .catch((error) => {

              //     });
              // }

              Days.push(day.data().name);

              setIndexes(daysToIndexes(Days));






              if (day.data().isComplete == true) {
                CompletedDays.push(day.data().name);
                console.log(CompletedDays);
                setCompletedIndexes(daysToIndexes(CompletedDays));
              } else if (day.data().isComplete == false) {
                notCompletedDays.push(day.data().name);
                setNotCompletedIndexes(daysToIndexes(notCompletedDays));
              }


            })
          })
        })


      })
    })

    return unsubscribe;
  }, [navigation])

  const registerForPushNotificationsAsync = async () => {
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });

      console.log("BAKAMR")
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        handleRegistrationError('Permission not granted to get push token for push notification!');
        return;
      }
      const projectId = "670b6faa-7373-4b17-96f5-3ac46d87f271"
      if (!projectId) {
        handleRegistrationError('Project ID not found');
      }

      try {
        const pushTokenString = (
          await Notifications.getExpoPushTokenAsync({
            projectId,
          })
        ).data;
        console.log(pushTokenString);
        return pushTokenString;
      } catch (e) {
        handleRegistrationError(`${e}`);
      }
    } else {
      handleRegistrationError('Must use physical device for push notifications');
    }
  }

  const getCustomDayIndex = (day) => {
    return day === 0 ? 6 : day - 1;
  };

  const sendPushNotification = async () => {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'Dont forget',
      body: 'Drink 1.5L water for your health and eat your meals prepared for you or there is some "Nutrition Recommendations :)"!',
      data: { "someData": 'goes here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }


  const startOfWeek = moment().startOf("isoWeek");
  const today = moment();

  const daysOfWeek = Array.from({ length: 7 }, (_, index) =>
    startOfWeek.clone().add(index, 'days')
  );
  // exerciseList database'den gelecek
  // var exerciseList = Exercises;

  function daysToIndexes(daysArray) {
    const daysMap = {
      "sunday": 6,
      "monday": 0,
      "tuesday": 1,
      "wednesday": 2,
      "thursday": 3,
      "friday": 4,
      "saturday": 5
    };

    return daysArray.map(day => daysMap[day.toLowerCase()]);
  }

  return (

    <View>

      <View style={tw`w-fit flex flex-row mx-auto my-10 mt-15`}>
        {daysOfWeek.map((day, index) => (
          <View style={[tw`px-2 mx-1 `, indexes.includes(index) ? tw`border border-slate-600 rounded-lg` : null, day.isSame(today, 'day') ? tw`border-2 border-indigo-700 rounded-lg` : null
            , completedIndexes.includes(index) ? tw`bg-green-400 ` : null, notCompletedIndexes.includes(index) && index < days.indexOf(currentDay) ? tw`bg-red-400` : null, notCompletedIndexes.includes(index) && index >= days.indexOf(currentDay) ? tw`bg-slate-400` : null]}>
            <Text style={tw`text-center text-2xl`}>{day.format('DD')}</Text>
            <Text style={tw`text-sm`}>{day.format('ddd')}</Text>
          </View>
        ))}


      </View>

      {indexes.includes(getCustomDayIndex(currentDate.getDay())) ? (
        <View>


          <Text style={tw`text-2xl px-3 font-semibold text-indigo-700 text-center`}>Today's Plan</Text>
          <Text style={tw`text-base my-2 px-3 text-indigo-700 text-center`}>Your training and training adventure is here</Text>

          <TouchableOpacity style={tw`mt-3`} onPress={() => navigation.navigate('CurrentWorkout')}>
            <ImageBackground source={Background} style={[tw`w-80 h-60 rounded-full mx-auto`]} imageStyle={{ borderRadius: 20,opacity:0.9 }}>
              <Text style={[tw`text-3xl text-white text-center text-lime-500`,{textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 20}]}>Your Daily Activity Plan</Text>
            </ImageBackground>

          </TouchableOpacity>


        </View>
      ) : (
        <View>


          <Text style={tw`text-2xl px-3 font-semibold text-indigo-700 text-center`}>Your Off Day</Text>
          <Text style={tw`text-sm my-2 px-3 text-indigo-700 text-center`}>View all exercises in if you want to</Text>

          <TouchableOpacity onPress={() => navigation.navigate('AllExercises')}>
            <ImageBackground source={Background3} style={[tw`w-80 h-60 rounded-full mx-auto`]} imageStyle={{ borderRadius: 20,opacity:0.6 }}>
              <Text style={[tw`text-3xl text-white text-center text-lime-500`,{textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 20}]}>All exercises</Text>
            </ImageBackground>

          </TouchableOpacity>


        </View>
      )}

      <TouchableOpacity style={tw`mt-6 drop-shadow-lg`} onPress={() => navigation.navigate('MainNutrition')}>
        <ImageBackground source={Background2} style={[tw`w-80 h-60 rounded-full mx-auto`]} imageStyle={{ borderRadius: 20,opacity:0.7 }}>
          <Text style={[tw`text-3xl text-white text-center text-indigo-700`,{textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10}]}>Your Daily Meal/Nutrition Plan</Text>
        </ImageBackground>

      </TouchableOpacity>

    </View>
  );
};

export default CurrentProgress;