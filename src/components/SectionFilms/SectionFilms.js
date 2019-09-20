import React from 'react';

import CardFilm from "./CardFilm/CardFilm";

import "./SectionFilm.scss";

export default function SectionFilms() {

    return (
        <section className="section">

            <h2 className="section-title">Films</h2>

            <CardFilm></CardFilm>

        </section>

    )
}