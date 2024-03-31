import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import Banner from '../assets/bannerWorkout.png';
import tw from "twrnc";
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import ExerciseImage from '../assets/Exercise.png';

const CurrentWorkout = ({ navigation, route }) => {
    const { stepsCompleted } = route.params;
    const receivedItem = route.params?.receivedItem
    const { workoutList } = route.params;

    const exampleSituation = true;

    console.log(receivedItem)

    return (
        <View>
            <ImageBackground source={Banner} style={tw`w-full h-60 rounded-full mx-auto `} imageStyle={tw`opacity-50`}>
                <View style={tw`my-40 p-3`}><Text style={tw`text-2xl  font-bold text-left text-indigo-700`}>Senin İçin Hazırlanan Program Burada</Text></View>

            </ImageBackground>
            <View style={tw`w-90 h-50 bg-green-400 rounded mx-auto my-5`}>
                <Text style={tw`text-3xl px-3 font-semibold text-indigo-700 `}>Dilediğin Gibi Özelleştir</Text>
                <View style={tw`my-auto`}>
                    <Text style={tw`text-sm font-thin px-3 text-justify text-indigo-700`}>Aşağıda senin için hazırlanmış olan egzersiz programını kendine göre özelleştirebilirsin!
                    </Text>
                </View>
                {/* Özelleştirme Butonu */}
                <TouchableOpacity style={tw`mx-auto my-8  w-30 h-10 bg-indigo-700 rounded`} onPress={() => console.log(workoutList)}>
                    <View style={tw`m-auto`}>
                        <Text style={tw`text-white text-md`}>Özelleştir</Text>
                    </View>
                </TouchableOpacity>


            </View>

            {/* <TouchableOpacity style={tw`mx-auto my-4  w-50 h-10 bg-indigo-700 rounded`} >
                <View style={tw`m-auto`}>
                    <Text style={tw`text-white text-md`}>Antrenmana Başla</Text>
                </View>
            </TouchableOpacity> */}

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={tw`h-70`}>
                    {workoutList.map((item) => (
                        <TouchableOpacity style={tw`mx-auto mt-3 w-90 h-fit bg-slate-200 rounded-lg flex flex-row`} onPress={() => navigation.navigate("WorkoutComplete", { item: item, workoutList: workoutList })}>
                            <View style={tw`nx-auto my-auto p-3 basis-1/4 flex flex-row`}>

                                {/* receivedItem yerine database'den workoutList.completed kullanılacak. Sadece 1 tane dairenin yeşil olma problemini bu giderecek */}
                                {receivedItem == item && receivedItem.completed ? (
                                    <View style={[tw`bg-green-800 w-6 h-6 rounded-full my-auto mr-2`]}>
                                        {/* Icon or indicator for completed item */}
                                    </View>
                                ) : (
                                    <View style={[tw`bg-slate-800 w-6 h-6 rounded-full my-auto mr-2`]}>
                                        {/*else if yazılacak (eğer receivedItem.completed false ise) */}
                                    </View>
                                )}
                                <Image style={{ width: 45, height: 45 }} source={require('../assets/Exercise.png')} />

                            </View>
                            <View style={tw`mx-auto my-auto p-3 basis-1/4`}><Text style={tw`text-indigo-700`}>{item.name}</Text></View>
                            <View style={tw`mx-auto my-auto p-3 basis-1/4`}><Text style={tw`text-indigo-700 text-center`}>x3 Sets</Text></View>
                            <View style={tw`mx-auto my-auto p-3 basis-1/4`}><Text style={tw`text-indigo-700 text-center`}>6Rep</Text></View>
                        </TouchableOpacity>
                    ))}
                </View>


            </ScrollView>

        </View>
    );
};

export default CurrentWorkout;