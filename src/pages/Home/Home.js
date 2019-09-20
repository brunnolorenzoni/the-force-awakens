import React, { useState, useEffect } from 'react';

import Header from "../../components/Header/Header";
import SectionFilms from "../../components/SectionFilms/SectionFilms";

import "./Home.scss";

export default function Home() {
    

    const getMovies = () => {
        console.log("oi")
    }

    useEffect(() => {
        getMovies();
    });


    return (
        <>
            <Header />
            <main className="main-wrapper">

                <SectionFilms/>
                
            </main>
        </>
    )
}