import React, { useState, useRef } from 'react'
import { Button, Text, View, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native'
import { Video, ResizeMode } from 'expo-av';


/* 
1: Work
2: Info
3: Home
4: People
5: Film
 */



export const Info = () => {
    /* const videoRef = useRef<VideoRef>(null);*/

    const video = useRef(null);
    const [personajeSelected, setPersonajeSelected] = useState({
        name: "",
        img: "",
        descripcion: ""
    },);



    return (
        <View style={styles.container}>
            <Text style={styles.twelve}>¡Bienvenidos a Cómo conocí a vuestra madre!</Text>
            <Image
                source={require('../assets/peronajes.png')}
                style={styles.personaje}
            />
            <View style={styles.personajeContainer}>
                
                <Text><Text style={{fontWeight: "bold"}}>Creado por:</Text> Carter Bays y Craig Thomas</Text>
                <Text><Text style={{fontWeight: "bold"}}>Dirigido por:</Text> Pamela Fryman, Rob Greenberg</Text>
                <Text><Text style={{fontWeight: "bold"}}>Protagonisado por:</Text> Josh Radnor, Jason Segel, Cobie Smulders, Neil Patrick Harris, Alyson Hannigan, Cristin Milioti</Text>
                <Text><Text style={{fontWeight: "bold"}}>No. Temporadas:</Text> 9</Text>
                <Text><Text style={{fontWeight: "bold"}}>No. Episodios:</Text> 208</Text>
                <Text><Text style={{fontWeight: "bold"}}>Tema Principal:</Text> "Hey Beautiful" por The Solids</Text>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    twelve: {
        fontSize: 18,
        textTransform: "uppercase",
        width: "100%",
        textAlign: "center",
        marginBottom: 10,
        letterSpacing: 1,
        fontFamily: "serif",
        fontStyle: "italic"
    },
    personajeContainer: {
        width: "90%",
        marginTop: 10,
        justifyContent: "flex-start",
        textAlign: "left",
        gap: 5,
        
    },
    personaje: {
        borderRadius: 10,
        width: 200,
        height: 200,
    },
    textDesc: {
        width: "100%",
        textAlign: "justify",
        padding: 10
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        fontWeight: "bold",

    }
})
