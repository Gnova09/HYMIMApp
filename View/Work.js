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



export const Work = () => {
    /* const videoRef = useRef<VideoRef>(null);*/

    
    return (
        <View style={styles.container}>
            <Text style={styles.twelve}>¡Contratame!</Text>
            <Image
                source={require('../assets/profile.jpg')}
                style={styles.personaje}
            />
            <View style={styles.personajeContainer}>
                <Text style={styles.textDesc}> Soy Georges, un apasionado desarrollador de software con una sólida formación y experiencia en la creación de soluciones tecnológicas innovadoras.</Text>
                
                <Text style={{fontWeight: "bold"}}>Habilidades:</Text>
                <Text>{`\u2022 Desarrollo de software full-stack `}</Text>
                <Text>{`\u2022 Diseño y construcción de arquitecturas de software `}</Text>
                <Text>{`\u2022 Conocimientos en bases de datos SQL y NoSQL`}</Text>

                <Text style={{fontWeight: "bold"}}>Contactame:</Text>
                <Text>{`\u2022 Email: Georges.Bueno@hotmail.com`}</Text>
                <Text>{`\u2022 Tel: 829-644-4677`}</Text>
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
