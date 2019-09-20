import React, { useState, useEffect } from 'react';

import NavList from "./NavList/NavList";
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
        setFilm(response);
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
                
                        <NavList href="characters" title="Characters" data={film.characters} color="#bf4545"/> 
                
                    : null
                }

                { 
                    film.starships ? 
                    
                    <NavList href="starships" title="Starships" data={film.starships} color="#045b87"/> 
                
                    : null
                }

                { 
                    film.vehicles ? 
                    
                    <NavList href="vehicles" title="Vehicles" data={film.vehicles} color="#9c33ab"/> 
                    
                    : null
                }

                { 
                    film.planets ? 
                
                        <NavList href="planets" title="Planets" data={film.planets} color="#08780e"/> 
                
                    : null
                }
                
                { 
                    film.species ? 
                
                        <NavList href="species" title="Species" data={film.species} color="#916119"/> 
                
                    : null
                }

            </article>



            
        </>
    )
}