import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RecipeList({ navigation, route }) {
    const { todaysRecipe } = route.params;

    console.log(todaysRecipe);
    return (
        <View style={{ padding: 24, flex: 1, backgroundColor: 'white' }}>
            {/* bu başlık dinamik olarak Breakfast/Lunch/Dinner olarak set edilmeli */}

            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', marginTop: 12 }}>Your Daily Recipe List</Text>
            <View style={{ marginTop: 36 }}>
                <View style={{ backgroundColor: '#F6F7F7', padding: 10, borderRadius: 6, marginTop: 14 }}>
                    <TouchableOpacity onPress={()=>navigation.navigate("MealDetail",{Recipe:todaysRecipe[0]})} style={{ backgroundColor: '#F6F7F7', padding: 10, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Breakfast</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#7B61FF' }}>kcal</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 36 }}>
                <View style={{ backgroundColor: '#F6F7F7', padding: 10, borderRadius: 6, marginTop: 14 }}>
                    <TouchableOpacity onPress={()=>navigation.navigate("MealDetail",{Recipe:todaysRecipe[2]})} style={{ backgroundColor: '#F6F7F7', padding: 10, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Lunch</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#7B61FF' }}>kcal</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 36 }}>
                <View style={{ backgroundColor: '#F6F7F7', padding: 10, borderRadius: 6, marginTop: 14 }}>
                    <TouchableOpacity onPress={()=>navigation.navigate("MealDetail",{Recipe:todaysRecipe[1]})} style={{ backgroundColor: '#F6F7F7', padding: 10, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Dinner</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#7B61FF' }}>kcal</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}