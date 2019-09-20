import React from 'react';

import Header from "../../components/Header/Header";
import SectionFilms from "../../components/SectionFilms/SectionFilms";

import "./Home.scss";

export default function Home() {

    return (
        <>
            <Header />
            <main className="main-wrapper">

                <SectionFilms/>
                
            </main>
        </>
    )
}