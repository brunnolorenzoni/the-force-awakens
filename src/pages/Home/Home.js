import React, { useState, useEffect } from 'react';

import Header from "../../components/Header/Header";
import SectionFilms from "../../components/SectionFilms/SectionFilms";

const Home = () => {

    const [heightHeader, setheightHeader] = useState(0);

    useEffect(() => {
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

export default Home;