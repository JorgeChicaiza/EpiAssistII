import React, { useState } from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native';
import { collection, getDocs, addDoc} from '@firebase/firestore';
import db from '../database/firebase'
const CreateActivityScreen = (props) =>{

    const [state, setState] = useState({
        nombre:'',
        detalles:'',
        hora:''
    });

    const handleChangeText = (nombre, value) =>{
        setState({...state, [nombre]:value})
    };

    


   const saveNewActivity = () =>{
       if (state.nombre ===''){
           alert("Llene todos los campos")
       }else{
        
        const docRef= addDoc(collection(db,"actividades"),{
            nombre: state.nombre,
            detalles: state.detalles,
            hora: state.hora
           });
         docRef.id;
         state.nombre="";
         state.detalles="";
         state.hora="";

         props.navigation.navigate("ActivitiesList");

       }
   
   }



    return(
       <ScrollView style={styles.container}>

           <View style={styles.inputGroup}>
               <TextInput placeholder="Nombre actividad" onChangeText={(value)=>handleChangeText('nombre',value)}/>

           </View>
           <View style={styles.inputGroup}> 
               <TextInput placeholder="Detalles"  onChangeText={(value)=>handleChangeText('detalles',value)}/>
               
           </View>
           <View style={styles.inputGroup}>
               <TextInput placeholder="Hora" onChangeText={(value)=>handleChangeText('hora',value)}/>
               
           </View>
           <View >
              <Button title="Guardar Actividad" onPress={()=>saveNewActivity()}/>
               
           </View>
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

export default CreateActivityScreen