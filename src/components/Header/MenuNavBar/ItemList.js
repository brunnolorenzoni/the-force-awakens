import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ItemList(props) {

    const {icon, text} = props;

    console.log(icon)

    return (
        <li>
            <FontAwesomeIcon icon={icon} size="2x"/>
            {text}
        </li>
    )
}