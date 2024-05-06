import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Screens/Login';
import { Signup } from './Screens/Signup';
import PersonalInfoScreen from './Screens/personalInfoScreen';
import PhysicalInfoScreen from './Screens/physicalInfoScreen';
import CreateWorkoutScreen from './Screens/CreateWorkoutScreen';
import { PaperProvider } from "react-native-paper"
import CurrentWorkout from './Screens/CurrentWorkout';
import CurrentProgress from './Screens/CurrentProgress';
import WorkoutComplete from './Screens/WorkoutComplete';
import { NativeBaseProvider, extendTheme } from "native-base";
import CustomizeScreen from './Screens/CustomizeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditProfile from './Screens/EditProfile';
import Icon from 'react-native-vector-icons/FontAwesome';
import CreateRecipes from './Screens/CreateRecipes';
import MainNutritionScreen from './Screens/MainNutritionScreen';
import NutritionList from './Screens/NutritionList';
import NutritionDetail from './Screens/NutritionDetail';
import RecipeList from './Screens/RecipeList';
import MealDetail from './Screens/MealDetail';
import { ResetPassword } from './Screens/ResetPassword';
import AllExercises from './Screens/AllExercises';
import MuscleGroup from './Screens/MuscleGroup';
import ExerciseDetail from './Screens/ExerciseDetail';


const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen options={{ tabBarIcon: ({ color, size }) => (<Icon name='calendar' color={color} size={size}></Icon>) }} name='Current Progress' component={CurrentProgress}></Tab.Screen>
      <Tab.Screen  options={{tabBarIcon:({color,size})=>(<Icon name='edit' color={color} size={size}></Icon>)}} name='Edit Profile' component={EditProfile}></Tab.Screen>
    </Tab.Navigator>
  )
}

const theme = extendTheme({ colors: newColorTheme });



const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NativeBaseProvider theme={theme}>

      <PaperProvider>
        <React.StrictMode>

          <NavigationContainer >
            <Stack.Navigator
              initialRouteName='Login'
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name='Login'
                component={Login}
              />
              <Stack.Screen
                name='Signup'
                component={Signup}
              />
              <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
              <Stack.Screen name="PhysicalInfo" component={PhysicalInfoScreen} />
              <Stack.Screen name="CreateWorkout" component={CreateWorkoutScreen} />
              <Stack.Screen  name='CurrentProgress' component={Home} />
              <Stack.Screen name='CurrentWorkout' component={CurrentWorkout} />
              <Stack.Screen name='WorkoutComplete' component={WorkoutComplete} />
              <Stack.Screen name="CustomizeScreen" component={CustomizeScreen} />
              <Stack.Screen name="Edit Profile" component={EditProfile} />
              <Stack.Screen name="CreateRecipe" component={CreateRecipes} />
              <Stack.Screen name='MainNutrition' component={MainNutritionScreen} />
              <Stack.Screen name='NutritionList' component={NutritionList} />
              <Stack.Screen name='NutritionDetail' component={NutritionDetail} />
              <Stack.Screen name='RecipeList' component={RecipeList}/>
              <Stack.Screen name='MealDetail' component={MealDetail}/>
              <Stack.Screen name='ResetPassword' component={ResetPassword}/>
              <Stack.Screen name='AllExercises' component={AllExercises}/>
              <Stack.Screen name='MuscleGroup' component={MuscleGroup}/>
              <Stack.Screen name='ExerciseDetail' component={ExerciseDetail}/>

              
            </Stack.Navigator>
          </NavigationContainer>
        </React.StrictMode>
      </PaperProvider>
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Cabin_Condensed-Medium'
  }
});
