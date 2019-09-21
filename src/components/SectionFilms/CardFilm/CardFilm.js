import React from 'react';

import Poster from "./Poster/Poster";
import Title from "./Title/Title";
import ReleaseDate from "./ReleaseDate/ReleaseDate";
import Synopsis from "./Synopsis/Synopsis";
import MoreDetailsButton from "./MoreDetailsButton/MoreDetailsButton";

export default function CardFilm(props) {

    const { title, episode_id, release_date, opening_crawl, url } = props.item;

    return (
        <article className="card">
            <Poster image_name={title}/>
            <Title title={title} episode={episode_id}/>
            <ReleaseDate date={release_date}/>
            <Synopsis text={opening_crawl}/>

            <MoreDetailsButton href={url}/>

        </article>

    )
}