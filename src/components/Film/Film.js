import React, { useState, useEffect } from 'react';

import CharactersList from "./CharactersList/CharactersList";
import HeaderImage from "./HeaderImage/HeaderImage";
import TitleFilm from "./TitleFilm/TitleFilm";
import ChapterFilm from "./ChapterFilm/ChapterFilm";

import { getFilms } from '../../services/API';

import "./Film.scss";


export default function Film(props) {

    const { id_film, height } = props;

    const [film, setFilm] = useState({});

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
            { film.title ? 

                <HeaderImage image_name={film.title}/> : null

            }

            <article className="article-film">

                { film.title ?  <TitleFilm title={film.title}/> : null }
                { film.episode_id ?  <ChapterFilm episode_id={film.episode_id}/> : null }

                { film.opening_crawl ?  <p className="synopsis">{film.opening_crawl}</p> : null }
                
                { 
                    film.characters ? 
                
                        <CharactersList characters={film.characters}  /> 
                
                    : null
                }

            </article>



            
        </>
    )
}