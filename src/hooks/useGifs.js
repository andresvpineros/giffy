import { useContext, useState, useEffect } from 'react'
import getGifs from '../services/getGifs';
import GifsContenxt from '../context/GifsContext';

export default function useGifs({ keyword } = { keyword: null }) {
    const { gifs, setGifs } = useContext(GifsContenxt);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keywordToUse)
        });
    }, [keyword]);

    return { loading, gifs };
}