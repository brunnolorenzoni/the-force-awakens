import React, { useState, useEffect } from 'react';

import Header from "../../components/Header/Header";
import SectionFilms from "../../components/SectionFilms/SectionFilms";
import Film from "../../components/Film/Film";


export default function Films(props) {


    const hasIdFilm = props.match.params.id;

    const [heightHeader, setheightHeader] = useState(0);

    useEffect(() => {
        setheightHeader(document.getElementById('header-wrapper').offsetHeight);
    }, [heightHeader]);


    return (
        <>
            <Header />
            
            {
                hasIdFilm ? 

                <main className="main-wrapper" style={{paddingTop: heightHeader}}>
                    <Film id_film={hasIdFilm} /> 
                </main>
                
                : 

                <main className="main-wrapper" style={{paddingTop: heightHeader}}>
                    <SectionFilms/>
                </main>
            }
        </>
    )
}