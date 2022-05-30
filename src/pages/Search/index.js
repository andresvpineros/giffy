

import React from 'react'
import Spinner from '../../components/Spinner/Spinner';
import ListOfGifs from '../../components/Gifs/ListOfGifs';
import useGifs from '../../hooks/useGifs';

export default function Search({ params }) {
    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword });

    return (
        <div>
            {
                loading ? <Spinner /> : <ListOfGifs gifs={gifs} />
            }       
        </div>
    )
}
