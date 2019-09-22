import React from 'react';

const ReleaseDate = (props) => {

    const { date } = props;

    return (
        <div className="release-container">
            <p className="release-text">Release date: {date}</p>
        </div>
    )
}

export default ReleaseDate;