import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ImageColors from 'react-native-image-colors';

import { SimplePersonaje } from '../interfaces/personajesInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width

interface Props {
    personaje: SimplePersonaje
}

export const PersonajeCard = ({ personaje }: Props) => {

    const [bgColor, setBgColor] = useState('grey')
    const isMounted = useRef(true);
    const navigation =  useNavigation();

    useEffect(() => {
        
        if ( !isMounted.current ) return;

        ImageColors.getColors( personaje.picture, {fallback: 'grey'} )
        .then( colors => {
            ( colors.platform === 'android' )
            ? setBgColor( colors.dominant || 'grey' )
            : setBgColor( colors.platform || 'grey' )
        } )

        return () => {
            isMounted.current = false
        }
         
    }, [])

    return (
        <TouchableOpacity
        activeOpacity={0.9}
        onPress={ 
            () => navigation.navigate('PersonajesScreen', { 
                simplePersonaje: personaje,
                color: bgColor
             }) 
        }
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor
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
        top: 56,
        alignSelf: 'center',
    },
    personajeImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        borderRadius: 100,
        alignSelf: 'center',
        top: -30,
    },
});
