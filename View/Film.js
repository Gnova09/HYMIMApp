import React, { useState, useRef } from 'react'
import { Button, Text, View, StyleSheet, Alert, TouchableOpacity, Image, Linking } from 'react-native'
import { Video, ResizeMode } from 'expo-av';


/* 
1: Work
2: Info
3: Home
4: People
5: Film
 */


const momentos = [
    {
        name: "Juntos para siempre",
        img: require("../assets/momentos/Juntos.png"),
        video: "https://www.youtube.com/embed/ies5TUZTa9U?si=SOvTHtsP9mSjP78n",
        descripcion: "Barnabus 'Barney' Stinson (1976), interpretado por Neil Patrick Harris, es un ex-mujeriego, partidario de los trajes y mago al que le gusta jugar al laser tag y usar las palabras sublime y legendario, palabras que Ted dice que usa con un sentido demasiado liberal."
    },
    {
        name: "La limusina",
        img: require("../assets/momentos/limusina.png"),
        video: "https://youtu.be/HunB2WNIEQ8",
        descripcion: "Barnabus 'Barney' Stinson (1976), interpretado por Neil Patrick Harris, es un ex-mujeriego, partidario de los trajes y mago al que le gusta jugar al laser tag y usar las palabras sublime y legendario, palabras que Ted dice que usa con un sentido demasiado liberal."
    },
    {
        name: "Diez sesiones",
        img: require("../assets/momentos/Diezsesiones.png"),
        video: "https://youtu.be/4iXyhrey8qA",
        descripcion: "A pesar de lo mal que terminó, la relación entre Stella y Ted nos dejó grandes momentos. Sin duda uno de los clips más románticos de la serie es la cita exprés que Ted logra organizar para una Stella desbordada por el trabajo. Dos minutos son más que suficiente para demostrar un gran gesto."
    },

]

export const Film = () => {
    /* const videoRef = useRef<VideoRef>(null);*/

    const video = useRef(null);
    const [status, setStatus] = React.useState({});
    const [momentoSelected, setmomentoSelected] = useState({
        name: "",
        img: "",
        video:"youtube.com",
        descripcion: ""
    },);



    return (
        <View style={styles.container}>
            <Text style={styles.twelve}>Personajes</Text>
            <View style={styles.personajeContainer}>
                {
                    momentos.map((momento,i) => {
                        return (
                            <TouchableOpacity onPress={()=>setmomentoSelected(momento)} key={i}>
                                <Image
                                    source={momento.img}
                                    style={styles.personaje}
                                />      
                            </TouchableOpacity>
                        )
                    })
                } 
            </View>

            <Text style={styles.text}> {momentoSelected.name}</Text>
            <TouchableOpacity onPress={()=>Linking.openURL(momentoSelected.video)} >
            <Text style={styles.textDesc}> Parar ver video en youtube Click Aqui </Text>
            </TouchableOpacity>

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
        fontSize: 26,
        textTransform: "uppercase",
        width: 200,
        textAlign: "justify",
        margin: "auto",
        letterSpacing: 1,
        fontFamily: "serif",
        fontStyle: "italic"
    },
    personajeContainer: {
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    personaje: {
        borderRadius: 10,
        width: 100,
        height: 100,
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
