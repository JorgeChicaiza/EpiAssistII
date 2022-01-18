import React, { useState } from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet, Text} from 'react-native';
import { collection, getDocs, addDoc} from '@firebase/firestore';
import db from '../database/firebase'
import { FAB } from 'react-native-elements'
const prueba = (props) =>{





    return(
        
       <ScrollView style={styles.container}>
      <FAB title="Agregar Medicamento" color="blue" />


 

       </ScrollView>
       

    )
}

const styles = StyleSheet.create({
    container : { 
        flex : 1,
        paddin : 35
    },

    inputGroup:{
        flex : 1,
        paddin : 0,
        marginBottom : 15,
        borderBottomWidth : 1,
        borderBottomColor : '#cccccc'

    }
}

)

export default prueba