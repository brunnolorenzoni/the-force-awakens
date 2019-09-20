import React from 'react';

import Poster from "./Poster/Poster";
import Synopsis from "./Synopsis/Synopsis";
import ReleaseDate from "./ReleaseDate/ReleaseDate";
import MoreDetailsButton from "./MoreDetailsButton/MoreDetailsButton";

import "./CardFilm.scss";

export default function CardFilm() {

    return (
        <article className="card">
            <Poster />
            <ReleaseDate />
            <Synopsis />

            <MoreDetailsButton />

        </article>

    )
}