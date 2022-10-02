import { useEffect, useRef, useState } from "react";
import { personajesApi } from "../api/personajesApi";

import { PersonajesPaginatedResponse, SimplePersonaje, Result } from '../interfaces/personajesInterfaces';


export const usePersonajesSearch = () => {

    const [isFetching, setIsFetching] = useState(true);
    const [simplePersonajeList, setSimplePersonajeList] = useState<SimplePersonaje[]>([])

    const loadPesonajes = async() => {

        const resp = await personajesApi.get<PersonajesPaginatedResponse>( 'https://rickandmortyapi.com/api/character' );
        mapPersonajeList( resp.data.results )

    }

    const mapPersonajeList = ( personajeList: Result[] ) => {

        const newPersonajeList: SimplePersonaje[] = personajeList.map(( {name, url, status} ) => {

            const urlParts = url.split('/');
            const id = urlParts[ urlParts.length - 1 ];
            const picture = `https://rickandmortyapi.com/api/character/avatar/${ id }.jpeg`;

            return { id, picture, name, status }

        });
        
        setSimplePersonajeList(newPersonajeList);
        setIsFetching(false)

    }

   useEffect(() => {
    loadPesonajes();
   }, [])
    
   return {
    isFetching,
    simplePersonajeList
   }

}
