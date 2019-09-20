import React from 'react';
import RomanNumeral from 'js-roman-numerals';

import "./Title.scss";

export default function Title(props) {

    const { title, episode } = props;

    return (

        <h3 className="title-film">
            {new RomanNumeral(parseInt(episode)) + ". " + title}
        </h3>
    )
}