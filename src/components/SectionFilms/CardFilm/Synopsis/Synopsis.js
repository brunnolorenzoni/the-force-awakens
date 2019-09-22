import React from 'react';

const Synopsis = (props) => {

    const { text } = props;

    const formatText = (text) => {
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

export default Synopsis;