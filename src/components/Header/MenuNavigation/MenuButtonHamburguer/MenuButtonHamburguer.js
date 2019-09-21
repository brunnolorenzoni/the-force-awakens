import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './MenuButtonHamburguer.scss'

export default function MenuButtonHamburguer(props) {

    const { parentListener } = props;

    function handleClick(e){

        parentListener();

    }

    return (
        <button type="button" id="btn-menu" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} size="2x"/>
        </button>
    )
}