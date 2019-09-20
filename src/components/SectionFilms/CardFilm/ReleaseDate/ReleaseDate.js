import React from 'react';

import "./ReleaseDate.scss"

export default function ReleaseDate(props) {

    const { date } = props;

    return (
        <div className="release-container">
            <p className="release-text">Release date: {date}</p>
        </div>
    )
}