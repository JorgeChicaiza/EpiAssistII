import React, { useState } from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet, Text, Picker} from 'react-native';
import { collection, getDocs, addDoc} from '@firebase/firestore';
import db from '../database/firebase'
import { Input, Header, Divider} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';

const UpdateActivityScreen= (props) =>{

    const [selectedValue, setSelectedValue] = useState("");
    return(
        
       <ScrollView style={{ backgroundColor: '#F6FEFF', padding:10}}>
           <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Crear Actividad', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
  <br/>
  <br/>
  <View > 


  <Input
  placeholder='Actividad'
  leftIcon={
    <Icon
      name='angle-double-right'
      size={24}
      color='black'
    />
  }
/>
<br/>
    <Input
  placeholder='Lugar'
  
  leftIcon={
    <Icon
      name='map-marker'
      size={24}
      color='black'
    />
  }
/>

      <br/><br/>  
    <div>
    <Icon
      name='safari'
      size={24}
      color='black'
    />
    <label>  </label><label>Hora</label>
    <br/><br/>
    

    <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Hora"  />
        <Picker.Item label="1"  />
        <Picker.Item label="2"  />
        <Picker.Item label="3"  />
        <Picker.Item label="4"  />
      </Picker>
      <label>  </label><label>:</label><label>  </label>

      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Minutos" value="1" />
        <Picker.Item label="1" value="2" />
        <Picker.Item label="2" value="3" />
        <Picker.Item label="3" value="4" />
        <Picker.Item label="4" value="5" />
      </Picker>
      <br/> <br/><br/>



      <TextInput
    multiline={true}
    numberOfLines={4}
    onChangeText={(text) => this.setState({text})}
   />

<br/><br/>
    <Input
  placeholder='Observaciones'
  
  leftIcon={
    <Icon
      name='edit'
      size={24}
      color='black'
    />
  }
/>
<Input
/>
<br/><br/><br/><br/>
<Button title="ACTUALIZAR"/>
    </div>
      </View> 
     
       </ScrollView>
       

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });

export default UpdateActivityScreen