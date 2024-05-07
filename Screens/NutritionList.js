import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react';
import tw from 'twrnc';

export default function MealPlan({ navigation, route }) {
    const { todaysNutrition } = route.params;

    console.log(todaysNutrition);

    return (
        <ScrollView style={{ padding: 24, flex: 1, backgroundColor: 'white' }}>
            {/* bu başlık dinamik olarak Breakfast/Lunch/Dinner olarak set edilmeli */}

            <View style={tw`mx-auto mt-5`}>
                <Text style={[tw`text-indigo-700`,{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', marginTop: 12 }]}>Your Daily Nutrition List</Text>
            </View>

            {todaysNutrition.map((item) => (

                <>
                    <View style={{ marginTop: 36 }}>
                        <View style={{ backgroundColor: '#F6F7F7', padding: 10, borderRadius: 20, marginTop: 14 }}>
                            <Pressable onPress={() => navigation.navigate("NutritionDetail", { item: item })} style={{ backgroundColor: '#F6F7F7', padding: 10, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>{item.Name}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#7B61FF' }}>{Math.round(item.Calorie)}kcal</Text>
                                </View>
                            </Pressable>
                        </View>


                    </View>

                </>

            ))}

        </ScrollView>
    )
}