import React from 'react';

import "./Synopsis.scss";

export default function Synopsis(props) {

    const { text } = props;

    function formatText(text)
    {
        return (text.length > 80) ? (text.substring(0, 80) + "...") : text;

    }

    return (
        <div className="synopsis-container">
            <p className="synopsis-text">
                {formatText(text)}
            </p>
        </div>
    )
}