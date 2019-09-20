import React, { useState, useEffect } from 'react';

import "./TitleFilm.scss";

export default function TitleFilm(props) {

    const {title} = props

    return (

        <h2 className="title-film">
            {title}
        </h2> 
    )
}