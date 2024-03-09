import React from 'react'
import { Button, Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

/* 
1: Work
2: Info
3: Home
4: People
5: Film
 */

export const Menu = ({ handleView, view }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.MenuBTN}
                title="Informacion"
                onPress={() => handleView(1)}
            >
                <MaterialIcons name='work' style={view === 1 ? styles.IconSelected:styles.Icon} />
                <Text style={styles.IconText}>Work</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.MenuBTN}
                title="Traduc"
                onPress={() => handleView(2)}
            >
                <Icon name='info' style={view === 2 ? styles.IconSelected:styles.Icon} />
                <Text style={styles.IconText}>Info</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.MenuBTN}
                title="Portada"
                onPress={() => handleView(3)}
            >
                <Icon name='home' style={view === 3 ? styles.IconSelected:styles.Icon} />
                <Text style={styles.IconText}>Home</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.MenuBTN}
                title="Personajes"
                onPress={() => handleView(4)}
            >
                <MaterialIcons name='people-outline' style={view === 4 ? styles.IconSelected:styles.Icon} />
                <Text style={styles.IconText}>GENDER</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.MenuBTN}
                title="Exp"
                onPress={() => handleView(5)}
            >
                <Fontisto name='film' style={view === 5 ? styles.IconSelected:styles.Icon} />
                <Text style={styles.IconText}>Film</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        width: "100%",
        height: 60,
        backgroundColor: "black",
        bottom: 0
    },
    MenuBTN: {
        borderRadius: 5,
        padding: 2,
        alignItems: "center",
        borderColor: "black",
        justifyContent: "center",
        height: "100%",
        width: "19%",
    },
    btn: {
        fontSize: 1,
        backgroundColor: "white"
    },
    Icon: {
        fontSize: 30,
        color: "gray"
    },
    IconSelected: {
        backgroundColor: "white",
        borderRadius: 50,
        padding: 5,
        fontSize: 30,
        color: "black"
    },
    IconText: {
        fontSize: 12,
        color: "white"
    }
})