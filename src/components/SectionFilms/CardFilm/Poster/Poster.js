import React from 'react';

import accents from 'remove-accents'; 

const Poster = (props) => {

    const { image_name } = props;

    const formatImageName = (image_name) => {
        return accents.remove(image_name).replace(/ /g, "-").replace(/_/g, "-").trim().toLowerCase();
    }

    return (
        <div className="poster-container">
            <img className="poster-image" src={`/assets/${formatImageName(image_name)}.jpg`}/>
        </div>
    )
}

export default Poster;