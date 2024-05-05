import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { FIREBASE_AUTH, db } from '../firebase';

export default function CreateNutrition({ navigation, route }) {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = days[currentDate.getDay()];
    const[todaysNutrition,setTodaysNutrition]=useState([]);
    const [todaysRecipe,setTodaysRecipe]=useState([]);
    let tempNutritions=[];

    const [calorie, setCalorie] = useState(0);
    const [carb, setCarb] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);


   


    useEffect(() => {

       

        const currentUser = FIREBASE_AUTH.currentUser;
        const userRef = doc(db, "User", currentUser.uid);
        const newCollectionRef = collection(userRef, "Nutrition");
        const mealCollectionRef=collection(userRef,"Meal");

        const unsubscribe = navigation.addListener("focus",()=>{

            getDocs(mealCollectionRef).then((querysnapshot)=>{
                querysnapshot.forEach((meal)=>{
                    if(meal.data().dayName===currentDay){
                        setTodaysRecipe(meal.data().Meals);
                    }
                })
            })

            getDocs(newCollectionRef).then((querysnapshot)=>{
                querysnapshot.forEach((nutrition)=>{
    
                    if(nutrition.data().dayName==currentDay){
                        tempNutritions=nutrition.data().Nutritions;
                        setTodaysNutrition(nutrition.data().Nutritions);
    
                        console.log(tempNutritions);

                        let totalCalorie=0;
                        let totalCarb=0;
                        let totalProtein=0;
                        let totalFat=0;
                        
    
                        tempNutritions.map((n)=>{
                            if(n.Tag==="Protein"){
                                totalProtein+=(n.Gram*n.Protein)/100;
                                setProtein(totalProtein);
                                totalCalorie+=n.Calorie;
                                setCalorie(totalCalorie);
                                console.log(totalCalorie);
                            }else if(n.Tag==="Fat"){
                                totalFat+=n.Gram;
                                setFat(totalFat);
                                totalCalorie+=n.Calorie;
                                setCalorie(totalCalorie)
                                console.log(totalCalorie);
                            }else if(n.Tag==="Carbohydrate"){
                                totalCarb+=(n.Gram*n.Carb)/100;
                                setCarb(totalCarb);
                                totalCalorie+=n.Calorie;
                                setCalorie(totalCalorie);
                                console.log(totalCalorie);
                            }else if(n.Tag==="Vegetable"){
                                totalCalorie+=n.Calorie;
                                setCalorie(totalCalorie);
                            }else if(n.Tag==="Fruit"){
                                totalCalorie+=n.Calorie;
                                setCalorie(totalCalorie);
                            }else if(n.Tag==="Snack"){
                                totalCalorie+=n.Calorie;
                                setCalorie(totalCalorie);
                            }
                        })
                    }
                })
            })
        })

        return unsubscribe;

      
    },[navigation]);

    return (
        <View style={{ padding: 24, flex: 1, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 32, textAlign: 'center' }}>Daily Nutrition Intake</Text>
            <View style={{ marginTop: 36 }}>
                <Text style={{ fontSize: 18, marginBottom: 16, fontWeight: 'bold' }}>Today</Text>
                <View style={{ backgroundColor: '#F6F7F7', padding: 16, borderRadius: 20 }}>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Calorie</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{Math.round(calorie)} kcal</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Carbohydrate</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{Math.round(carb)} g</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Protein</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{Math.round(protein) } g</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold' }}>Fat</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, marginTop: 6, marginBottom: 6, fontWeight: 'bold', color: '#7B61FF' }}>{Math.round(fat)} g</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#F6F7F7', padding: 16, borderRadius: 4, marginTop: 16 }} onPress={() => navigation.navigate('RecipeList',{todaysRecipe:todaysRecipe})}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#7B61FF', padding: 18, alignContent: 'center' }}>See Your Meal Plan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#F6F7F7', padding: 16, borderRadius: 4, marginTop: 16 }} onPress={() => navigation.navigate('NutritionList',{todaysNutrition:todaysNutrition})}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#7B61FF', padding: 18, alignContent: 'center' }}>Nutrition Recommendations</Text>
            </TouchableOpacity>
        </View>
    )
}