import React, { useState, useRef } from 'react'
import { Button, Text, View, StyleSheet, Alert, TouchableOpacity, Image, TextInput } from 'react-native'


/* 
1: Work
2: Info
3: Home
4: Gender
5: Film
 */

const Separetor = () => <View style={styles.separator} />

export const Film = () => {

    /* const videoRef = useRef<VideoRef>(null);*/
    const [name, setName] = useState("")
    const [data, setData] = useState("")
    const onButtonPress = async () => {
        const url = `https://api.agify.io/?name=${name}`
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error al recuperar datos:', error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.twelve}>Revelador Edad</Text>
            <View style={styles.personajeContainer}>
                <TextInput
                    placeholder='Indique su nombre'
                    style={styles.input}
                    onChangeText={(value) => setName(value)}
                />
            </View>
            <Separetor />
            <Button
                title='Validar'
                onPress={()=>onButtonPress()}
            />
            <View 
            style={styles.personajeContainer}
            >
            <Text style={styles.textDesc}> Descripcion:</Text>
            <Text><Text style={{fontWeight: "bold"}}>Edad:</Text> {data.age}</Text>
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
    input: {
        borderWidth: 1,
        paddingHorizontal: 5,
        width: "100%"
    },
    twelve: {
        marginBottom: 10,
        fontSize: 22,
        textTransform: "uppercase",
        width: "75%",
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

    }, separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})
