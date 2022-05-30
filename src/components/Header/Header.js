
import React from 'react'
import { useLocation, Link } from "wouter"
import './Header.css'  

export default function Header({ keyword, setKeyword }) {

    // Wouter instances
    const setLocation = useLocation()[1];

    const handleSubmit = (e) => {
        e.preventDefault()
        if(keyword !== ''){
            setLocation(`/search/${keyword}`)
        } else {
            setLocation(`/`)
        }   
    }

    return (
        <header className="header-container">
            <Link to="/" onClick={() => setKeyword('')} className="title-redirect">
                <h1 className="header-title">GIFFY</h1>
            </Link>
            <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input 
                    className="input-field" 
                    type="text" name="keyword" 
                    value={keyword} 
                    onChange={e => setKeyword(e.target.value)}
                    placeholder="Search all the GIFS and Stickers"
                />
                <button type="submit" className="search-button"><span className="material-icons icon-expand">&#xe8b6;</span></button>
            </div>
            </form>
        </header>
    )
}