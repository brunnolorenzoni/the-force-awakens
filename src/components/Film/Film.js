import React, { useState, useEffect } from 'react';

import { getFilms } from '../../services/API';


export default function Film(props) {

    const { id_film } = props;

    const [film, setFilm] = useState({});
    const [characters, setCharacters] = useState([]);


    async function requestFilms()
    {
        var response = await getFilms(id_film);
        setFilm(response.data);
    }


    useEffect(() => {
        requestFilms();
    }, []);


    return (

        <>
            <div className="header-image">
                <img className="image" />
            </div>

            <h1>{film.title}</h1> 

            <p>{film.opening_crawl}</p>

            { 
                film.characters ? 
                <section className="section">
                    
                </section> : null
            }

            

        </>
    )
}