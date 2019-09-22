import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MenuButtonHamburguer = (props) => {

    const { parentListener } = props;

    const handleClick = () => {

        parentListener();

    }

    return (
        <button type="button" id="btn-menu" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} size="2x"/>
        </button>
    )
}

export default MenuButtonHamburguer;