import React, { useState } from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet, Text,Linking} from 'react-native';
import { collection, getDocs, addDoc} from '@firebase/firestore';
import db from '../database/firebase'
import { Input, Header, Divider,Card, Avatar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';


const HomeScreen = () =>{

    const handleCallPress = async ()=>{

  await  Linking.openURL("tel:+5281119173");
    };
    const handleSMSPress = async()=>{

        await  Linking.openURL("sms:+5281119173?body= assdasdasd");
    };
    const handleWhatsappPress = async()=>{
        await  Linking.openURL("https://wa.me/+593997582580?text=Whatsapp Predefinido");

    };
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
        
        <View><br/> <Button title='Llamar' onPress={handleCallPress}/></View>
        <View><br/><Button title='SMS' onPress={handleSMSPress}/></View>
        <View><br/> <Button title='Whatsapp' onPress={handleWhatsappPress}/></View>
    
    
   
   
        </ScrollView>
      
       

    )
}
export default HomeScreen