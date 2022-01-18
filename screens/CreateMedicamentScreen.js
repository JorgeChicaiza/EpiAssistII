import React, { useState } from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet, Text, Picker} from 'react-native';
import { collection, getDocs, addDoc} from '@firebase/firestore';
import db from '../database/firebase'
import { Input, Header, Divider} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';

const CreateMedicamentScreen = (props) =>{

    const [selectedValue, setSelectedValue] = useState("");
    return(
        
       <ScrollView style={{ backgroundColor: '#F6FEFF', padding:10}}>
           <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Crear Medicamento', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
  <br/>
  <br/>
  <View > 


  <Input
  placeholder='Medicamento'
  leftIcon={
    <Icon
      name='medkit'
      size={24}
      color='black'
    />
  }
/>
<br/>
    <Input
  placeholder='Dosis'
  
  leftIcon={
    <Icon
      name='calculator'
      size={24}
      color='black'
    />
  }
/>

<Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="mg" value="mg" />
        <Picker.Item label="g" value="g" />
        <Picker.Item label="ml" value="ml" />
        <Picker.Item label="pastilla" value="pastilla" />
        <Picker.Item label="capsula" value="capsula" />
      </Picker>

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

      <Icon
      name='hourglass-half'
      size={24}
      color='black'
    />
         <label>  </label><label>Tomar cada   </label><br/>
    
    
    <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="0"  />
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
        <Picker.Item label="Minutos" />
        <Picker.Item label="Horas"  />
        <Picker.Item label="Dias"  />
        <Picker.Item label="Semanas"  />
        
      </Picker>

      <TextInput
    multiline={true}
    numberOfLines={4}
    onChangeText={(text) => this.setState({text})}
   />

<br/><br/>
    <Input
  placeholder='Indicaciones'
  
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
<Button title="GUARDAR"/>
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

export default CreateMedicamentScreen