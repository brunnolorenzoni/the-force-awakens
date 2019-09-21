import React, { useState, useEffect } from 'react';

import Header from "../../components/Header/Header";
import SectionFilms from "../../components/SectionFilms/SectionFilms";

export default function Home() {

    const [heightHeader, setheightHeader] = useState(0);

    useEffect(() => {
        console.log("oi")
        setheightHeader(document.getElementById('header-wrapper').offsetHeight);
    }, []);

    return (
        <>
            <Header />
            <main className="main-wrapper" style={{paddingTop: heightHeader}}>

                <SectionFilms/>
                
            </main>
        </>
    )
}