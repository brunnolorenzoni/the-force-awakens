import React from 'react';

import Poster from "./Poster/Poster";
import Title from "./Title/Title";
import ReleaseDate from "./ReleaseDate/ReleaseDate";
import Synopsis from "./Synopsis/Synopsis";
import MoreDetailsButton from "./MoreDetailsButton/MoreDetailsButton";

import "./CardFilm.scss";

export default function CardFilm(props) {


    const { item } = props;

    console.log(item)

    return (
        <article className="card">
            <Poster />
            <Title />
            <ReleaseDate />
            <Synopsis />

            <MoreDetailsButton />

        </article>

    )
}