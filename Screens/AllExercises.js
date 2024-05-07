import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function AllExercisesAlternative({ navigation, route }) {

    
    
    return (
        <View style={{ padding: 24, flex: 1, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', marginTop: 12, color: '#25064C' }}>All Exercises</Text>
            <Text style={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', marginTop: 36, color: '#7B61FF' }}>Click to Select Muscle Group</Text>
            <View style={{ marginTop: 30 }}>
                <View style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius: 20, marginTop: 14 }}>
                    <Pressable style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius:20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => navigation.navigate('MuscleGroup',{MuscleGroup:"biceps"})}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Biceps</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius: 20, marginTop: 14 }}>
                <Pressable style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => navigation.navigate('MuscleGroup',{MuscleGroup:"triceps"})}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Triceps</Text>
                    </View>
                </Pressable>
            </View>
            <View style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius: 20, marginTop: 14 }}>
                <Pressable style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => navigation.navigate('MuscleGroup',{MuscleGroup:"shoulders"})}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Shoulders</Text>
                    </View>
                </Pressable>
            </View>
            <View style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius: 20, marginTop: 14 }}>
                <Pressable style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => navigation.navigate('MuscleGroup',{MuscleGroup:"chest"})}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Chest</Text>
                    </View>
                </Pressable>
            </View>
            <View style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius: 20, marginTop: 14 }}>
                <Pressable style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => navigation.navigate('MuscleGroup',{MuscleGroup:"back"})}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Back</Text>
                    </View>
                </Pressable>
            </View>
            <View style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius: 20, marginTop: 14 }}>
                <Pressable style={{ backgroundColor: '#F6F7F7', padding: 5, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => navigation.navigate('MuscleGroup',{MuscleGroup:"legs"})}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Legs</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}