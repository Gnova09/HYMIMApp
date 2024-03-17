import React, { useEffect, useRef } from 'react'
import { Button, Text, View, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native'
import { getDataLocally } from '../Utils/DataLocal';


/* 
1: Work
2: Info
3: Home
4: People
5: Film
 */

export const Historial = () => {
    /* const videoRef = useRef<VideoRef>(null);*/

    const [data, setData] = React.useState([]);

    const SetlogToData = async () => {
        setData( await getDataLocally("Logs"))
    }

    useEffect(()=>{
        SetlogToData()
    },[])

    return (
        <View style={styles.container}>

            <Text style={styles.twelve}>Historial de registos</Text>

            <View style={{height: "80%"}} >
                <ScrollView style={styles.scroll}>

                    {
                        data.map((log, i) => {
                            return (
                                <TouchableOpacity style={styles.uni} key={i}>
                                    <Text > Nombre: {log.titulo} </Text>
                                    <Text > Tipo: {log.tipo} </Text>
                                    <Text > Creado en: {log.createdDate} </Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
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
    scroll: {
        gap: 5
    },
    uni: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderWidth: 1,
        marginBottom: 2

    },
    video: {
        width: "100%",
        height: 400,
    },
    twelve: {
        fontSize: 26,
        textTransform: "uppercase",
        width: 200,
        textAlign: "center",
        margin: "auto",
        letterSpacing: 1,
        fontFamily: "serif",
        fontStyle: "italic"
    },
})
