import { View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import { ImageBackground } from 'react-native';
import tw from 'twrnc';
import ExerciseImage from '../assets/exampleExercise.png';
import { TouchableOpacity, ScrollView } from 'react-native';
import ProgressBarMultiStep from 'react-native-progress-bar-multi-step';
import IonIcon from '@expo/vector-icons/Ionicons';



const WorkoutComplete = ({ navigation, route }) => {
    // Burdaki item CurrentWorkout sayfasındaki üzerine tıklanılan her egzersize denk gelmektedir yani burdaki item bir egzersizi temsil eder
    const { item } = route.params;
    const { workoutList } = route.params;
    const [progress, setProgress] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    




    console.log(item);
    // ExampleReps aslında her egzersizin sepesifik rep sayısını belirtir burda örnek olsun diye kendim constant girdim her egzersize ayrı rep atamamız gerek
    const exampleReps = 4;
    const steps = Array.from({ length: exampleReps }, (_, index) => index + 1);

    // bütün steplerin tamamlanması %100 tamamlanmış bir egzersiz verir (şu an max 4)
    // sonrasında current workout a yollanacak ve % oranı gösterilecek

    const handleStepPress = (step) => {
        setProgress(step);
        if (step - 1 === 4) {
            workoutList.map(exercise => ({
                if (exercise = item){
                    workoutList.completed = true
                }
            }))
            
            //bu item yerine workout.exercise.completed = true yapılacak
            item.completed = true
            console.log(item)
        }
    };

    const handleComplete = () => {

        stepsCompleted = true;
        // Burda Kullanıcı complete butonuna bastığı zaman (52. satır) istediğimiz rep sayısına ulaşıp ulaşmadığımız kontrol edilir ve ona göre işlemler yapılır
        if (progress - 1 == exampleReps) {
            console.log("Completed Workout");
            // Kullanıcının sahip olduğu egzersiz listesinde her bir ezgersiz elemanı için tamamlanıp tamamlanmadığına dair bir değer bulunması gerek ve bu değer trueya çekilip
            // geri CurrentWorkout Ekranına dönülmelidir
            

            // gerekli işlemler yapıldıktan sonra CurrentWorkout Ekreanına geri dönülür
            navigation.navigate("CurrentWorkout", { workoutList: workoutList, receivedItem: item});
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
                <Text style={tw`text-center text-md`}>{exampleReps}x10</Text>
            </View>

            <ProgressBarMultiStep
                progressive={true}
                page={progress}
                setPage={setProgress}
                tabs={steps.map(step => ({ pageNo: step, onPress: () => handleStepPress(step + 1) }))}
                inProgressBackgroundColor={'rgb(153,153,216)'}
                circleStyle={{ width: 40, height: 40 }}
            />

            <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700 rounded-full mx-auto my-auto`} onPress={handleComplete}>
                <View style={tw`my-auto items-center`}>
                    <Text style={tw`text-center text-white font-bold`}>Complete Workout</Text>
                </View>
            </TouchableOpacity>
        </View>


    )
}

export default WorkoutComplete