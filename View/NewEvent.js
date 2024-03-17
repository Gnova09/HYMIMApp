import React, { useEffect, useRef, useState } from 'react'
import { Button, Text, View, StyleSheet, Alert, TouchableOpacity, TextInput } from 'react-native'
import { Video, ResizeMode } from 'expo-av';
import { saveDataLocally } from '../Utils/DataLocal';
import ImagePicker from 'react-native-image-picker';



/* 
1: Work
2: Info
3: Home
4: People
5: Film
 */

export const NewEvent = () => {
    /* const videoRef = useRef<VideoRef>(null);*/

    const video = useRef(null);
    const [data, setData] = useState({});
    const [image, setImage] = useState(null);

    //IMaGE
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    const pickImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            const source = { uri: response.uri };
            setImage(source);
          }
        });
      };

    const onChangeData = (name, value) => {
        setData(
            {
                ...data,
                [name]: value
            }
        )
    }


    return (
        <View style={styles.container}>

            <Text style={styles.twelve}>Nuevo evento</Text>
            <View style={styles.eventContainer} >
                <Text>Evento</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => onChangeData("Titulo", value)}
                    placeholder="Titulo"
                />
            </View>

            <View style={styles.eventContainer} >
                <Text>Fecha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => onChangeData("Fecha", value)}
                    placeholder="Fecha"
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.eventContainer} >
                <Text>Descrip</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => onChangeData("Descripcion", value)}
                    placeholder="Descripcion"
                />
            </View>

            <View style={styles.eventContainer} >
                <Text>Foto</Text>
                <Button title="Elije Imagen" onPress={pickImage} />
                {image && <Image source={image} style={{ width: 200, height: 200 }} />}
            </View>

            <Button
                title="Guardar Evento"
                color="#f194ff"
                onPress={() => saveDataLocally("test", data)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    eventContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 40,
        width: "70%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
