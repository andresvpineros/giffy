
import React from 'react'
import './Gif.css';
import {
  Link
} from 'wouter';

export default function Gif({ title, url, id }) {

  return (
    <Link to={`/gifs/${id}`}>
       <div className="gif-container">
        <div className="gif">
            <h4>{title}</h4>
            <img loading="lazy" alt={title} src={url}/>
        </div>
      </div> 
    </Link>
  )
}