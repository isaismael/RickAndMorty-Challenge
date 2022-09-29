import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/Ionicons';
import { PersonajeFull } from '../interfaces/personajesInterfaces';

interface Props {
    personaje: PersonajeFull;
}

export const PersonajeDetails = ({ personaje }: Props ) => {


  return (
    <ScrollView
    style={{
        ...StyleSheet.absoluteFillObject,
    }}
    >
        <View style={{
            ...styles.container,
            marginTop: 400
        }}>
            <Text style={styles.detalleTitle}>
            <Icon name="person-outline" color='black' size={20} />
                Genero:</Text>
            <Text style={styles.detalle}>{personaje.gender}</Text>
            <Text style={styles.detalleTitle}>
            <Icon name="planet-outline" color='black' size={20} />
                Orgien:</Text>
            <Text style={styles.detalle}>{personaje.origin.name}</Text>
            <Text style={styles.detalleTitle}>
            <Icon name="location-outline" color='black' size={20} />
                Localidad:</Text>
            <Text style={styles.detalle}>{personaje.location.name}</Text>
            <Text style={styles.detalleTitle}>
            <Icon name="logo-electron" color='black' size={20} />
                Especie:</Text>
            <Text style={styles.detalle}>{personaje.species}</Text>
            

        </View>

        <Text>
            <Icon name="film-outline" color='black' size={20} />
                {personaje.episode}
            </Text>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
        height: 280,
        marginHorizontal: 20,
    },
    detalle: {
        top: 5,
        fontSize: 20,
        fontWeight: 'bold',
        right: -4,
    },
    detalleTitle: {
        right: 18,
        top: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
});