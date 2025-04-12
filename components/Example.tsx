import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Example(){
    return(
        <View style = {styles.container}>
            <Text style={styles.text}>
                Esse é um componente de exemplo
            </Text>
                <Text style={styles.text}>
                Texto que se repete
            </Text>
        </View>
        

    );

}



const styles = StyleSheet.create({
    container: {
        backgroundColor:"orange",
        margin: 20,

    },
    text:{
        margin: 4,
        fontWeight: "bold"
    }
})




