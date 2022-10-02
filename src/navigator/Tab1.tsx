import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PersonajesScreen } from '../screens/PersonajesScreen';
import { SimplePersonaje } from '../interfaces/personajesInterfaces';

export type RootStackParams = {

  HomeScreen: undefined,
  PersonajesScreen: { simplePersonaje: SimplePersonaje, color: string }

}

const Stack = createStackNavigator<RootStackParams>();

export const Tab1 = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: 'white'
      }
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PersonajesScreen" component={PersonajesScreen} />
    </Stack.Navigator>
  );
}