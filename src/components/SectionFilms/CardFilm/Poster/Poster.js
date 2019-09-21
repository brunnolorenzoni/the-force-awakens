import React from 'react';

import accents from 'remove-accents'; 

import "./Poster.scss"

export default function Poster(props) {

    const { image_name } = props;

    function formatImageName(image_name)
    {
        return accents.remove(image_name).replace(/ /g, "-").replace(/_/g, "-").trim().toLowerCase();
    }

    return (
        <div className="poster-container">
            <img className="poster-image" src={`/assets/${formatImageName(image_name)}.jpg`}/>
        </div>
    )
}