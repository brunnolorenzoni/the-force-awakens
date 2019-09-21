import React, { useState, useEffect } from 'react';

export default function TitleFilm(props) {

    const {title} = props

    return (

        <h2 className="title-film">
            {title}
        </h2> 
    )
}