import React from 'react';

import ItemList from "./ItemList"

import "./MenuNavBar.scss"

import { faFilm } from '@fortawesome/free-solid-svg-icons'

export default function MenuNavBar() {

    return (
        <nav id="nav-menu">
            <ul className="list-menu">
                <ItemList text="Filmes" icon={faFilm}></ItemList>
            </ul>
        </nav>
    )
}