import React from 'react';

import ItemList from "./ItemList/ItemList"

export default function CharactersList(props) {

   const { characters } = props;

    return (

        <nav className="nav-characters">
            <ul className="list-characters">

                {
                    characters.map((item, index) => (
                        <ItemList key={index} url={item} />
                    ))
                }


            </ul>
        </nav>
    )
}