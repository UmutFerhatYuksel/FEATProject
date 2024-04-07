import { View, Text, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImageBackground } from 'react-native';
import tw from 'twrnc';
import ExerciseImage from '../assets/exampleExercise.png';
import { TouchableOpacity, ScrollView } from 'react-native';
import ProgressBarMultiStep from 'react-native-progress-bar-multi-step';
import IonIcon from '@expo/vector-icons/Ionicons';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { FIREBASE_AUTH, db } from '../firebase';



const WorkoutComplete = ({ navigation, route }) => {
    // Burdaki item CurrentWorkout sayfasındaki üzerine tıklanılan her egzersize denk gelmektedir yani burdaki item bir egzersizi temsil eder
    const { item } = route.params;


    const [progress, setProgress] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // const currentUser = FIREBASE_AUTH.currentUser;

        // const userInfoRef = doc(db, "User", currentUser.uid);
        // const newCollectionRef = collection(userInfoRef, "UserInfo");

        // getDocs(newCollectionRef).then((querySnapshot) => {
        //     querySnapshot.forEach((i) => {

        //         const dayCollectionRef = doc(newCollectionRef, i.id);
        //         const subCollectionRef = collection(dayCollectionRef, "Day");

        //         getDocs(subCollectionRef).then((querySnapshot) => {
        //             querySnapshot.forEach((day) => {
        //                 console.log(day.id, " => ", day.data());


        //                 const exerciseCollectionRef = doc(subCollectionRef, day.id);
        //                 const ExercisesubCollectionRef = collection(exerciseCollectionRef, "Exercise");


        //                 const ExerciseQuery = query(ExercisesubCollectionRef, where("name", "==", item.name));

        //                 updateDoc(ExerciseQuery,{isComplete:true})


        //             })
        //         })
        //     })
        // })

    }, [])




    // ExampleReps aslında her egzersizin sepesifik rep sayısını belirtir burda örnek olsun diye kendim constant girdim her egzersize ayrı rep atamamız gerek
    const steps = Array.from({ length: item.set }, (_, index) => index + 1);
    const transformedArray = steps.map((item) => {
        return { title: "", pageNo: item };
    });

    console.log(transformedArray);

    // bütün steplerin tamamlanması %100 tamamlanmış bir egzersiz verir (şu an max 4)
    // sonrasında current workout a yollanacak ve % oranı gösterilecek

    const handleStepPress = (step) => {
        setProgress(step);
    };

    const handleComplete = () => {

        console.log(progress - 1);
        // Burda Kullanıcı complete butonuna bastığı zaman (52. satır) istediğimiz rep sayısına ulaşıp ulaşmadığımız kontrol edilir ve ona göre işlemler yapılır
        if (progress == item.set) {
            console.log("Completed Workout");
            setIsComplete(true);
            // Kullanıcının sahip olduğu egzersiz listesinde her bir ezgersiz elemanı için tamamlanıp tamamlanmadığına dair bir değer bulunması gerek ve bu değer trueya çekilip
            // geri CurrentWorkout Ekranına dönülmelidir
            const currentUser = FIREBASE_AUTH.currentUser;

            const userInfoRef = doc(db, "User", currentUser.uid);
            const newCollectionRef = collection(userInfoRef, "UserInfo");

            getDocs(newCollectionRef).then((querySnapshot) => {
                querySnapshot.forEach((i) => {

                    const dayCollectionRef = doc(newCollectionRef, i.id);
                    const subCollectionRef = collection(dayCollectionRef, "Day");

                    getDocs(subCollectionRef).then((querySnapshot) => {
                        querySnapshot.forEach((day) => {
                            console.log(day.id, " => ", day.data());


                            const exerciseCollectionRef = doc(subCollectionRef, day.id);
                            const ExercisesubCollectionRef = collection(exerciseCollectionRef, "Exercise");


                            const ExerciseQuery = query(ExercisesubCollectionRef, where("name", "==", item.name));

                            getDocs(ExerciseQuery)
                                .then((querySnapshot) => {
                                    querySnapshot.forEach((doc) => {

                                        const exerciseDocRef = doc.ref;

                                        updateDoc(exerciseDocRef, { isComplete: true });
                                    });
                                })
                                .catch((error) => {
                                    console.error("Error getting documents: ", error);
                                });


                        })
                    })
                })
            })

            // gerekli işlemler yapıldıktan sonra CurrentWorkout Ekreanına geri dönülür
            navigation.navigate("CurrentProgress");
        }
    }






    return (


        <View style={tw`w-105`}>
            <Modal animationType='slide' visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <ScrollView style={tw`w-full h-full`}>
                    <Text style={tw`text-3xl font-bold text-indigo-700 text-center leading-loose`}>Description of the Exercise</Text>
                    <Text style={tw`text-xl leading-loose`}>{item.instructions}</Text>
                    <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700 rounded-full mx-auto my-auto`} onPress={() => setModalVisible(false)}>
                        <View style={tw`my-auto items-center`}>
                            <Text style={tw`text-center text-white font-bold`}>Close</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </Modal>


            <ImageBackground source={ExerciseImage} style={tw`w-full h-150 flex flex-row justify-between`}>
                <TouchableOpacity style={tw`w-10 h-10 bg-white rounded-full ml-5 mt-5`} onPress={() => setModalVisible(true)}>
                    <IonIcon style={tw`mx-auto my-auto`} name='information-outline' size={30} />
                </TouchableOpacity>

                <TouchableOpacity style={tw`w-10 h-10 bg-white rounded-full mr-5 mt-5`}>
                    <IonIcon style={tw`mx-auto my-auto`} name='exit-outline' size={30} />
                </TouchableOpacity>
            </ImageBackground>
            <Text style={tw`text-3xl font-bold text-indigo-700 text-center leading-loose`}>{item.name}</Text>

            <View style={tw`w-20 h-fit rounded bg-green-400 mx-auto my-auto`}>
                <Text style={tw`text-center text-md`}>{item.set}x10</Text>
            </View>

            <ProgressBarMultiStep
                progressive={true}
                page={progress + 1}
                setPage={setProgress}
                tabs={transformedArray}
                inProgressBackgroundColor={'rgb(153,153,216)'}
                circleStyle={{ width: 40, height: 40 }}
            />
            {progress===item.set ? (
                <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700 rounded-full mx-auto my-auto`} onPress={handleComplete}>
                    <View style={tw`my-auto items-center`}>
                        <Text style={tw`text-center text-white font-bold`}>Complete Workout</Text>
                    </View>
                </TouchableOpacity>
            ) : null}

        </View>


    )
}

export default WorkoutComplete