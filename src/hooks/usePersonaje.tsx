import { useState, useEffect } from 'react';
import { PersonajeFull } from '../interfaces/personajesInterfaces';
import { personajesApi } from '../api/personajesApi';


export const usePersonaje = ( id: string ) => {
  
    const [isLoading, setIsLoading] = useState(true)
    const [personaje, setPersonaje] = useState<PersonajeFull>({} as PersonajeFull)

    const loadPersonaje = async() => {
        const resp = await personajesApi.get<PersonajeFull>(`https://rickandmortyapi.com/api/character/${id}`);
        setPersonaje( resp.data )
        setIsLoading(false)
    }

    useEffect(() => {
        loadPersonaje();
    }, [])
    
    return{
        isLoading,
        personaje
    }
}
