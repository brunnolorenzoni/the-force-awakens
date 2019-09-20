import React from 'react';

import image from "../../../../assets/star-wars.jpeg";

import "./Poster.scss"

export default function Poster() {

    return (
        <div className="poster-container">
            <img className="poster-image" src={image}/>
        </div>
    )
}