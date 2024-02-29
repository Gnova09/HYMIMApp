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


const personajes = [
    {
        name: "Barney",
        img: require("../assets/personaje/barney.png"),
        descripcion: "Barnabus 'Barney' Stinson (1976), interpretado por Neil Patrick Harris, es un ex-mujeriego, partidario de los trajes y mago al que le gusta jugar al laser tag y usar las palabras sublime y legendario, palabras que Ted dice que usa con un sentido demasiado liberal."
    },
    {
        name: "Ted",
        img: require("../assets/personaje/ted.png"),
        descripcion: "Ted Mosby es un arquitecto que, a través de los capítulos de la serie, nos enseña muchas cosas sobre su profesión, por lo que, si viste el programa, sabrás lo fascinante que es estudiar la Licenciatura en Arquitectura."
    },
    {
        name: "Robin",
        img: require("../assets/personaje/robin.png"),
        descripcion: "Es amante de los puros, el alcohol (sobre todo whisky), las armas y el hockey. No le gustan los niños (aunque a veces siente que su reloj biológico está a punto de estallar) ni el compromiso, gustos que no compartía con Ted (y razón por la cual ellos rompieron al año de relación)."
    },
    {
        name: "Lyli",
        img: require("../assets/personaje/lily.png"),
        descripcion: "Lily Aldrin es la esposa de Marshall Eriksen y mejor amiga de Robin Scherbatsky, así como una de las mejores amigas de Ted Mosby, conociéndole desde la universidad."
    },
    {
        name: "Tracy",
        img: require("../assets/personaje/tracy.png"),
        descripcion: "Uno de los aspectos más característicos de su personalidad es el hecho de que piensa demasiado, cosa que le recriminan sus amigos una y otra vez. Ted desea imitar la vida de Marshall: tener una relación seria, estable, duradera, y con la que poder formar una familia."
    },
    {
        name: "Marshall",
        img: require("../assets/personaje/marshal.png"),
        descripcion: "Marshall Eriksen ha sido el mejor amigo de Ted Mosby desde 1996, cuando se conocieron en la Universidad Wesleyan y fueron compañeros de habitación. Él está casado con el amor de su vida, también antigua alumna de la universidad, Lily Aldrin. "
    },
]

export const People = () => {
    /* const videoRef = useRef<VideoRef>(null);*/

    const video = useRef(null);
    const [personajeSelected, setPersonajeSelected] = useState({
        name: "",
        img: "",
        descripcion: ""
    },);



    return (
        <View style={styles.container}>
            <Text style={styles.twelve}>Personajes</Text>
            <View style={styles.personajeContainer}>
                {
                    personajes.map((personaje,i) => {
                        return (
                            <TouchableOpacity onPress={()=>setPersonajeSelected(personaje)} key={i}>
                                <Image
                                    source={personaje.img}
                                    style={styles.personaje}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
                
                <Text style={styles.text}> {personajeSelected.name}</Text>
                <Text style={styles.textDesc}> Descripcion: {personajeSelected.descripcion}</Text>

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
        width:"100%",
        textAlign: "justify",
        padding: 10
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        fontWeight: "bold",

    }
})
