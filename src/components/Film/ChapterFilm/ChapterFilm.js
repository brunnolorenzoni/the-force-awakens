import React, { useState, useEffect } from 'react';

import RomanNumeral from 'js-roman-numerals';

const ChapterFilm = (props) => {

    const {episode_id} = props

    return (

        <h3 className="chapter-film">
            {"Chapter " + new RomanNumeral(parseInt(episode_id))}
        </h3> 
    )
}

export default ChapterFilm;