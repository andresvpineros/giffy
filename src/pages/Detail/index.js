

import React, { useContext } from 'react'
import Gif from '../../components/Gifs/Gif';
import useGifs from '../../hooks/useGifs';

export default function Detail({params}) {
    const { id } = params
    const { gifs } = useGifs();

    const gif = gifs.find((singleGif) => singleGif.id === id)

  return <Gif {...gif }/>
}
