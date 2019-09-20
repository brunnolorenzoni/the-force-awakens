import React, { useState, useEffect } from 'react';

import { getFilms } from '../../services/API';


export default function Film(props) {

    const { id_film } = props;

    const [film, setFilm] = useState([]);

    async function requestFilms()
    {
        var response = await getFilms(id_film);
        setFilm(response.data);
    }

    useEffect(() => {
        requestFilms();
    }, []);


    return (
        <h1>{film.title}</h1> 
    )
}