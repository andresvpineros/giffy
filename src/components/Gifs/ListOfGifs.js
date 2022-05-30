import React from 'react'
import Gif from './Gif';

export default function ListOfGifs({ gifs }) {

    return gifs.map(({ url, title, id}) => <Gif url={url} title={title} id={id} key={id}/>)
}