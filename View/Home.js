import React, { useEffect, useRef } from 'react'
import { Button, Text, Image, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { Video, ResizeMode } from 'expo-av';


/* 
1: Work
2: Info
3: Home
4: People
5: Film
 */

export const Home = () => {
    /* const videoRef = useRef<VideoRef>(null);*/

    const video = useRef(null);
    const [status, setStatus] = React.useState({});

    

    return (
        <View style={styles.container}>
            
            <Text style={styles.twelve}>Your APP</Text>
            
             <Image 
             source={require("../assets/Herramienta.jpg")} 
             style={styles.personaje}
             />
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
    video: {
        width: "100%",
        height: 400,
    },
    twelve:{
        fontSize:26,
        textTransform: "uppercase",
        width: 200,
        textAlign: "center",
        margin: "auto",
        letterSpacing: 1,
        fontFamily:"serif",
        fontStyle: "italic"
    },
    personaje: {
        borderRadius: 10,
        width: 200,
        height: 200,
    },
})
