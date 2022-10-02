import React, { useState, useEffect } from 'react'
import { View, Platform, FlatList, Dimensions, Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PersonajeCard } from '../components/PersonajeCard';
import { SearchInput } from '../components/SearchInput';
import { usePersonajesSearch } from '../hooks/usePersonajesSearch';
import { Loading } from '../components/Loading';
import { styles } from '../theme/appTheme';
import { SimplePersonaje } from '../interfaces/personajesInterfaces';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isFetching, simplePersonajeList } = usePersonajesSearch();

  const [personajesFiltered, setPersonajesFiltered] = useState<SimplePersonaje[]>([])

  const [term, setTerm] = useState<string>('')

  useEffect(() => {
    
    if( term.length === 0 ) {
      return setPersonajesFiltered([]);
    }
    
    setPersonajesFiltered(
      simplePersonajeList.filter( 
        (perso) => perso.name.toLocaleLowerCase()
        .includes( term.toLocaleLowerCase() ) 
        )
    );

  }, [term])
  

  if (isFetching) {
    return <Loading />
  }

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#212653'
      }}
    >

      <SearchInput
        onDebounce={ (value) => setTerm(value) }
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: (Platform.OS === 'ios') ? top : top + 30,
        }}
      />

      <FlatList
        data={personajesFiltered}
        keyExtractor={(personaje) => personaje.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        // HeaderCompont
        ListHeaderComponent={(
          <View style={{
            ...styles.globalMargin,
            paddingBottom: 90,
            marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80
          }}>
            <Text style={{
              color:'white',
              fontSize: 30,
              fontWeight: 'bold'
              }}
              > {term} </Text>
          </View>
        )}

        renderItem={({ item }) => (<PersonajeCard personaje={item} />)}

      />

    </View>
  )
}


