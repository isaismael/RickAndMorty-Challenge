import { useEffect, useRef, useState } from "react";
import { personajesApi } from "../api/personajesApi";

import { PersonajesPaginatedResponse, SimplePersonaje, Result } from '../interfaces/personajesInterfaces';


export const usePersonajesPaginated = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [simplePersonajeList, setSimplePersonajeList] = useState<SimplePersonaje[]>([])
    const nextPageUrl = useRef('https://rickandmortyapi.com/api/character');

    const loadPesonajes = async() => {

        setIsLoading(true)
        const resp = await personajesApi.get<PersonajesPaginatedResponse>( nextPageUrl.current );
        nextPageUrl.current = resp.data.info.next;
        mapPersonajeList( resp.data.results )

    }

    const mapPersonajeList = ( personajeList: Result[] ) => {

        const newPersonajeList: SimplePersonaje[] = personajeList.map(( {name, url} ) => {

            const urlParts = url.split('/');
            const id = urlParts[ urlParts.length - 1 ];
            const picture = `https://rickandmortyapi.com/api/character/avatar/${ id }.jpeg`;

            return { id, picture, name }

        });
        setSimplePersonajeList([ ...simplePersonajeList, ...newPersonajeList ]);
        setIsLoading(false)

    }

   useEffect(() => {
    loadPesonajes();
   }, [])
    
   return {
    isLoading,
    simplePersonajeList,
    loadPesonajes
   }

}
