import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import { getCharacter } from '../../../../services/API';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import "./ItemList.scss"

export default function CharactersList(props) {

    const { url } = props;

    const [character, setCharacter] = useState({});

    function getId(url)
    {
        return url.match(/\d+/g).map(Number);
    }

    async function requestChacter(url)
    {
        var response = await getCharacter(getId(url));
        setCharacter(response.data);
    }

    useEffect(() => {
        requestChacter(url)
    }, []);

    return (

        <li className="item">
            <Link to={"../characters/" + getId(url)}>
                <button type="button" className="character-btn">
                    <FontAwesomeIcon className="icon" icon={faPlus} size="xs"/>
                    <span className="name">{character.name}</span>
                </button>
            </Link>
        </li>
    )
}