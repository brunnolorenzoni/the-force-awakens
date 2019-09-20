import React from 'react';

import ItemList from "./ItemList/ItemList"

import "./CharactersList.scss";

export default function CharactersList(props) {

   const { characters } = props;

    return (

        <nav className="nav-characters">

            <h4 className="list-title">Characters</h4>

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