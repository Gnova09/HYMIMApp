import React, { useEffect, useRef } from 'react'
import { Button, Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
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
            
            <Text style={styles.twelve}>How i Met your Mother</Text>
            
             <Video
                ref={video}
                style={styles.video}
                source={{uri: 'https://imdb-video.media-imdb.com/vi929409305/1434659607842-pgv4ql-1616202489045.mp4?Expires=1709265589&Signature=lDTl-t64GzR-HdclGzm8H7vLYnetyY3pcqeURdhqyLFADCU3FnXjIufo0Mq6L82duJ-PRX~nfogW9iuvo73gis8EJXTBCfyBLOcUVbHwpqZ5WVdSTx2VbJuYzJSMvXvSwcMdSG7JfYdaZBec9fZuRD4tWS1h7DWyXgGdYIaiW5run7gUfA60uWcdGxrzSj48tGz9A3nOpJRBSeM3G8wtD2HHgYh7buHcRioNJ7iJcVmXpm4ZRAg5nzu9kKOW~atZuPVqEqlRDCvpMsbnAasX5qzMaku3e0aVST9MLf5lot-6GpInesfzWfTFwM-6fDa3aGd3bRs0jnD3ZrA~eMxoRQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'}}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping={false}
                shouldPlay={true}
                volume={0.8}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
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
})
