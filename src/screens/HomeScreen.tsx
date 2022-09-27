import React from 'react'
import { Image, ActivityIndicator, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PersonajeCard } from '../components/PersonajeCard';
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

      <View
        style={{
          alignItems: 'center',}}
      >
        <FlatList
          data={simplePersonajeList}
          keyExtractor={(personaje) => personaje.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // HeaderCompont
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              margin: top + 20,
              paddingBottom: 70,
            }}>Rick and Morty App</Text>
          )}

          renderItem={({ item }) => (<PersonajeCard personaje={item} />)}

          //Infinite scroll
          // onEndReached={ loadPesonajes }
          // onEndReachedThreshold= {0.4}

          ListFooterComponent={(
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color='grey'
            />
          )}
        />
      </View>

    </>
  )
}
