import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import { getInfo } from '../../../../services/API';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function ItemList(props) {

    const { url, href, color } = props;

    const [info, setInfo] = useState({});

    function getId(url)
    {
        return url.match(/\d+/g).map(Number);
    }

    async function requestInfo(url)
    {
        var response = await getInfo(url);
        setInfo(response);
    }

    useEffect(() => {
        requestInfo(url)
    }, []);

    return (

        <li className="item">
            <Link to={"../" + href + "/" + getId(url)}>
                <button type="button" className="character-btn" style={{backgroundColor: color}}>
                    <FontAwesomeIcon className="icon" icon={faPlus} size="xs"/>
                    <span className="name">{info.name}</span>
                </button>
            </Link>
        </li>
    )
}