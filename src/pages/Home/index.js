import React from 'react'
import useGifs from '../../hooks/useGifs';

import Spinner from '../../components/Spinner/Spinner';
import ListOfGifs from '../../components/Gifs/ListOfGifs';

export default function Home(){
    const { loading, gifs } = useGifs();

    return (
        <div>
            {
                loading ? <Spinner /> : <ListOfGifs gifs={gifs} />
            }       
        </div>
    )
}