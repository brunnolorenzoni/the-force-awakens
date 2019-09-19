import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './MenuButtonHamburguer.scss'

export default function MenuButtonHamburguer() {

    return (
        <button type="button" id="btn-menu">
            <FontAwesomeIcon icon={faBars} size="2x"/>
        </button>
    )
}