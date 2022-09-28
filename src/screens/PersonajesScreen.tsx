import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParams } from '../navigator/Navigator'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParams, 'PersonajesScreen'> { };

export const PersonajesScreen = ({ navigation, route }: Props) => {

  const { simplePersonaje, color } = route.params
  const { name, picture } = simplePersonaje;
  const { top } = useSafeAreaInsets();

  return (
    <View>

      <View style={{
        ...styles.headerContainer,
        backgroundColor: color,
      }}>
        <TouchableOpacity
        onPress={ () => navigation.pop() }
        activeOpacity={0.8}
        style={{
          ...styles.backButton,
          top: top + 12,
        }}
        >
          <Icon 
          name="arrow-back-outline"
          color='white'
          size={35}
          />
        </TouchableOpacity>
        {/* Personaje name */}
        <Text
        style={{
          ...styles.personajeName,
          top: top,
        }}
        >
          {name}
        </Text>
        {/* Img Personaje */}
        <FadeInImage
        uri={picture}
        style={styles.personajeImage}
        />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
  },
  backButton:{
    position: 'absolute',
    left: 10,
  },
  personajeName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  personajeImage: {
    width: 300,
    height: 300,
    position: 'absolute',
    bottom: -20,
    borderRadius: 1000,
  }
});
