import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator()
import ActivitiesList from './screens/ActivitiesList'
import ActivityDetaill from './screens/ActivityDetaill'
import CreateActivityScreen from './screens/CreateActivityScreen'
import prueba from './screens/prueba'
import CreateMedicamentScreen from './screens/CreateMedicamentScreen';
import UpdateMedicamentScreen from './screens/UpdateMedicamentScreen';
import CreateActivieScreen from './screens/CreateActivitieScreen';
import UpdateActivityScreen from './screens/UpdateActivityScreen';
import HomeScreen from './screens/HomeScreen';
import LocationScreen from './screens/LocationScreen';
function MyStack(){
  return(
  <Stack.Navigator>
       <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    <Stack.Screen name="CreateMedicamentScreen" component={CreateMedicamentScreen}/> 
    <Stack.Screen name="CreateActivitieScreen" component={CreateActivieScreen}/>
    
    <Stack.Screen name="LocationScreen" component={LocationScreen}/>
    
    <Stack.Screen name="UpdateteMedicamentScreen" component={UpdateMedicamentScreen}/> 
 
    <Stack.Screen name="UpdateActivityScreen" component={UpdateActivityScreen}/>
 
     

<Stack.Screen name="prueba" component={prueba}/> 
      <Stack.Screen name="CreateActivityScreen" component={CreateActivityScreen}/>
     <Stack.Screen name="ActivitiesList" component={ActivitiesList}/>

     <Stack.Screen name="ActivityDetaill" component={ActivityDetaill}/>
     
  </Stack.Navigator>
  )
}
export default function App() {
  return (
    
 <NavigationContainer>
  <MyStack/>
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
});
