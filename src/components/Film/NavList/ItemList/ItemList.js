import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function ItemList(props) {

    const { id, text, href, color } = props;

    return (

        <li className="item">
            <Link to={"../" + href + "/" + id}>
                <button type="button" className="character-btn" style={{backgroundColor: color}}>
                    <FontAwesomeIcon className="icon" icon={faPlus} size="xs"/>
                    <span className="name">{text}</span>
                </button>
            </Link>
        </li>
    )
}