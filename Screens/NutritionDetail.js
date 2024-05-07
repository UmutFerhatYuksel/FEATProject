import { View, Image, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react';
import tw from 'twrnc';


export default function NutritionDetail({ navigation, route }) {

    const { item } = route.params
    return (
        <View style={{ padding: 24, flex: 1, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 32, textAlign: 'center' }}>{item.Name}</Text>
            <View style={{ marginTop: 36 }}>

                <View style={tw`mx-auto my-auto`}>
                    <View>
                        <Image
                            style={{
                                resizeMode: 'cover',
                                height: 100,
                                width: 200,
                            }}
                            source={{uri:item.Image}}
                        />
                    </View>
                </View>
            </View>

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 12, marginBottom: 12 }}>Nutrition</Text>
            <View style={{ backgroundColor: '#F6F7F7', padding: 16, borderRadius: 20 }}>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Total Calorie</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{Math.round(item.Calorie)} kcal</Text>
                    </View>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Carbohydrate</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{item.Carb} / 100g</Text>
                    </View>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Protein</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{item.Protein} / 100g</Text>
                    </View>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Fat</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{item.Fat} / 100g</Text>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: '#F6F7F7', padding: 16, borderRadius: 20,marginTop:20 }}>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                    <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Recomended Gram Intake</Text>
                    <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{Math.round(item.Gram)} g</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}