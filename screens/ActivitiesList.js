import React,{useEffect, useState} from 'react'
import {View, Text, Button} from 'react-native'
import { collection, getDocs, addDoc} from '@firebase/firestore';
import db from '../database/firebase'
import { ScrollView } from 'react-native-gesture-handler';
import  { ListItem } from 'react-native-elements/dist/list/ListItem';
 {ListItem} 'react-native-gesture-elements';
const ActivitiesList = (props) =>{

const[actividades, setActividades]= useState([])
useEffect(()=>{
    const obtenerDatos = async()=> {
        const datos=await getDocs(collection(db,'actividades'));
        const actividades= [];
        datos.forEach((document)=>{
            console.log(document.data());
            const {nombre, detalles, hora} = document.data();
            actividades.push({
                id: document.id,
                nombre,
                detalles,
                hora
                
            });
        });
     
    }
    
    obtenerDatos();
},[]);

    return(
       <ScrollView>
         
           <Button title='Crear Actividad' onPress={()=>props.navigation.navigate('CreateActivityScreen')}/>

          

           {
           actividades.map(a=>{
                   return (
                        <ListItem
                        
                         key={a.id}
                        >
                            <ListItem.Chevron/>

                        </ListItem>


                        
                   )
               })
           }
       </ScrollView>
       

    )
}
export default ActivitiesList