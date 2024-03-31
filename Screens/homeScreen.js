import { View } from 'react-native'
import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import WorkoutHistory from './WorkoutHistory';
import CurrentProgress from './CurrentProgress';

const HomeScreen=({navigation}) =>{
    const HistoryRoute = () => <WorkoutHistory />

    const ProgressRoute = () => <CurrentProgress />

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: "history", title: "Workout History", focusedIcon: "heart", unfocusedIcon: "heart-outline" },
        { key: "progress", title: "Progress", focusedIcon: "heart", unfocusedIcon: "heart-outline" }
    ])

    const renderScene = BottomNavigation.SceneMap({
        history: HistoryRoute,
        progress: ProgressRoute
    })


    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}
export default HomeScreen;