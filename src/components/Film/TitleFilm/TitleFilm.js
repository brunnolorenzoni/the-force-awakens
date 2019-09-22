import React, { useState, useEffect } from 'react';

const TitleFilm = (props) => {

    const {title} = props

    return (

        <h2 className="title-film">
            {title}
        </h2> 
    )
}

export default TitleFilm;