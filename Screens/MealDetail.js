import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import tw from 'twrnc';

export default function MealDetail({ navigation, route }) {

    const { Recipe } = route.params;
    return (
        <ScrollView style={{ padding: 24, flex: 1, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 32, textAlign: 'center' }}>{Recipe.Name}</Text>
            <View style={{ marginTop: 36 }}>
                {/* BURAYA IMAGE EKLENECEK  
       <View style={styles.container}>
       <View>
         <Image
           style={{
             resizeMode: 'cover',
             height: 100,
             width: 200,
           }}
           source={require('../asstes/scrambledEggs.png')}
         />
       </View>
       </View>
       */}
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 12, marginBottom: 12 }}>Ingredients</Text>
                <View style={{ backgroundColor: '#F6F7F7', padding: 16, borderRadius: 6 }}>

                    {Recipe.Ingredients.map((item) => (
                        <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6 }}>{item}</Text>
                            </View>
                        </View>
                    ))}


                </View>
            </View>

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 12, marginBottom: 12 }}>Nutrition</Text>
            <View style={{ backgroundColor: '#F6F7F7', padding: 16, borderRadius: 6 }}>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Calorie</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{Math.round(Recipe.Calorie)}kcal</Text>
                    </View>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Carbohydrate</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{Math.round(Recipe.Carb)} g /100g</Text>
                    </View>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Protein</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{Math.round(Recipe.Protein)} g /100g</Text>
                    </View>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Fat</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{Math.round(Recipe.Fat)} g /100g g</Text>
                    </View>
                </View>
            </View>

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 12, marginBottom: 12 }}>Recipe</Text>
            <View style={{ backgroundColor: '#F6F7F7', padding: 16, borderRadius: 6 }}>
                <ScrollView style={tw`w-full h-full`}>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, textAlign: 'center' }}>{Recipe.recipe}</Text>
                </ScrollView>
            </View>

        </ScrollView>
    )
}