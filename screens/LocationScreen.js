import React, { useState, useEffect } from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet, Text,Platform} from 'react-native';
import { Input, Header, Divider,Card, Avatar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import *as Location from "expo-location";
const LocationScreen = () =>{

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }

          
    return(

        <ScrollView style={{ backgroundColor: '#F6FEFF', padding:10}}>

           <View>
           <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Inicio', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>  
        </View>
        <View >
      <Text>{text}</Text>
    </View>
        
        </ScrollView>
      
       

    )
}
export default LocationScreen