import { router } from "expo-router";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Form(){
const[texto1 ,  setTexto1]= useState("")
const[texto2 ,  setTexto2]= useState("")
const[texto3 ,  setTexto3]= useState("")

const [mostrarTexto, setMostrar] = useState(false);

function mostrar(){
    return(
        <View>
        <Text>{texto1}</Text>
        <Text>{texto2}</Text>
        <Text>{texto3}</Text>
     </View>
    )
      
    }

    return(
  
    <View>
      
            <TextInput 
                    placeholder="TXT 1"
                    onChangeText={setTexto1}
            />  
            <TextInput 
                    placeholder="TXT 2"
                    onChangeText={setTexto2}
            />  
            <TextInput 
                    placeholder="TXT 3"
                    onChangeText={setTexto3}
            />  
        <Button title="mostrar" onPress={ ()=>{setMostrar(true)}} />
    {mostrarTexto ? mostrar(): ""}
    
    </View>
    )
}