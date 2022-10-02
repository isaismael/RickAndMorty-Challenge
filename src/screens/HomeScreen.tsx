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


      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#212653'
        }}
      >
        <FlatList
          data={simplePersonajeList}
          keyExtractor={(personaje) => personaje.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // HeaderCompont
          ListHeaderComponent={(
            <View style={{
              ...styles.globalMargin,
              top: top + 20,
              margin: top + 20,
              paddingBottom: 170,
            }}><Image
                source={require('../assets/logo.png')}
                style={styles.rickBG}
              /></View>
          )}

          renderItem={({ item }) => (<PersonajeCard personaje={item} />)}

          //Infinite scroll
          onEndReached={ loadPesonajes }
          onEndReachedThreshold= {0.4}

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
