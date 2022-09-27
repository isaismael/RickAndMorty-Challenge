import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SimplePersonaje, Gender } from '../interfaces/personajesInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width

interface Props {
    personaje: SimplePersonaje
}

export const PersonajeCard = ({ personaje }: Props) => {
    return (
        <TouchableOpacity>
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4
            }}>
                {/* name personaje */}
                <View>
                    <Text style={styles.name} >
                        {personaje.name}
                    </Text>
                </View>

                <FadeInImage
                    uri={personaje.picture}
                    style={styles.personajeImage}
                />

            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: 160,
        marginBottom: 70,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 55,
        left: 12
    },
    personajeImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        borderRadius: 100,
        right: 10,
        top: -30,
    },
});
