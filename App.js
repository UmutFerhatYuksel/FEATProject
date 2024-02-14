import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './Screens/Login';
import { Signup } from './Screens/Signup';



const Stack =createNativeStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app 31</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Signup'
      >
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily:'Cabin_Condensed-Medium'
  }
});
