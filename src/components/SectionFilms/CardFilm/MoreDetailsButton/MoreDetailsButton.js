import React from 'react';
import { Link } from 'react-router-dom';

import "./MoreDetailsButton.scss"

export default function MoreDetailsButton(props) {

    const { href } = props

    function getFilmId(href)
    {
        const id = href.match(/\d+/g).map(Number);;

        return "films/" + id;

    }

    return (
        <div className="btn-container">
            <Link to={getFilmId(href)}>
                <button type="button" className="btn-details">
                    More Details
                </button>
            </Link>                
        </div>
    )
}