import React, { useState, useEffect } from 'react';

import CardFilm from "./CardFilm/CardFilm";

import { getFilms } from '../../services/API';
import { async } from 'q';

import "./SectionFilms.scss";

export default function SectionFilms() {

    const [films, setFilms] = useState([]);


    function sortByDate (data)
    {
        return data.sort((a,b) => (new Date(a.release_date) > new Date(b.release_date)) ? 1 : ((new Date(b.release_date) > new Date(a.release_date)) ? -1 : 0)); 
    }

    async function requestFilms()
    {
        var response = await getFilms();
        setFilms(sortByDate(response.data.results))
    }

    useEffect(() => {
        requestFilms();
    }, []);

    return (
        <section className="section" id="section-film">

            <h2 className="section-title">Films</h2>

            <div className="container-cards">

                {films ? films.map(film => (
                    <CardFilm key={film.episode_id} item={film}></CardFilm>
                )) : null}

            </div>

        </section>

    )
}