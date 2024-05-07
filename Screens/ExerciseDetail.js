import { View, Image, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'


export default function ExerciseDetail({ navigation,route }) {

    const {item} = route.params;
    return (
        <View style={{ padding: 24, flex: 1, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 32, textAlign: 'center' }}>{item.name}</Text>
            <View style={{ marginTop: 36 }}>
                <View style={{ margin: 'auto' }}>
                    <Image
                        style={{
                            resizeMode: 'contain',
                            height: 150,
                            width: "%100",
                        }}
                        source={{ uri: item.image_url }}
                    />
                </View>

            </View>

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 12, marginBottom: 12 }}>Information</Text>
            <View style={{ backgroundColor: '#F6F7F7', padding: 16, borderRadius: 20 }}>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Muscle Group</Text>
                    </View>
                    <View>
                        <Text style={{ textTransform:"capitalize", fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{item.muscle}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Equipment</Text>
                    </View>
                    <View>
                        <Text style={{textTransform:"capitalize", fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{item.equipment}</Text>
                    </View>
                </View>
            </View>

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 12, marginBottom: 12 }}>Instructions</Text>
            <View style={{ backgroundColor: '#F6F7F7', padding: 16, borderRadius: 20 }}>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, textAlign: 'center' }}>{item.instructions}</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}