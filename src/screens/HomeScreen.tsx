import React from 'react'
import { Image, Text, View, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePersonajesPaginated } from '../hooks/usePersonajesPaginated';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { simplePersonajeList, loadPesonajes } = usePersonajesPaginated();
  console.log(simplePersonajeList)

  return (
    <>
      <Image
        source={require('../assets/rick.png')}
        style={styles.rickBG}
      />

      <FlatList
        data={simplePersonajeList}
        keyExtractor={(personaje) => personaje.id}
        renderItem={({ item }) => (
          <Image 
          source={{uri: item.picture}}
          style={{
            width: 150,
            height: 150,
          }}
          />
        )}

        //Infinite scroll
        // onEndReached={ loadPesonajes }
        // onEndReachedThreshold= {0.4}

        ListFooterComponent={(
          <ActivityIndicator
            style={{ height: 100 }}
            size= {20}
            color= 'grey'
          />
        )}
      />

      {/* <Text style={{
            ...styles.title,
            ...styles.globalMargin,
            top: top + 20,
        }}>Rick and Morty App</Text> */}
    </>
  )
}
