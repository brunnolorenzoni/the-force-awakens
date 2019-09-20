import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import { getCharacter } from '../../../../services/API';


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

        <li>
            <Link to={"../characters/" + getId(url)}>
                {character.name}
            </Link>
        </li>
    )
}