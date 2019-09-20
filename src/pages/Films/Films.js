import React from 'react';

import Header from "../../components/Header/Header";
import SectionFilms from "../../components/SectionFilms/SectionFilms";
import Film from "../../components/Film/Film";


export default function Films(props) {


    const hasIdFilm = props.match.params.id;


    return (
        <>
            <Header />
            
            {
                hasIdFilm ? 

                <main className="main-wrapper">
                    <Film id_film={hasIdFilm} /> 
                </main>
                
                : 

                <main className="main-wrapper">
                    <SectionFilms/>
                </main>
            }
        </>
    )
}