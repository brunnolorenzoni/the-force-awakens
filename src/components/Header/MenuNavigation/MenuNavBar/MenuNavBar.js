import React from 'react';

import ItemList from "./ItemList/ItemList"

import "./MenuNavBar.scss"

import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faDna } from '@fortawesome/free-solid-svg-icons'

export default function MenuNavBar() {

    return (
        <nav id="nav-menu">
            <ul className="list-menu">
                <ItemList text="Filmes" href="/films" icon={faFilm} color="#ffbb00"></ItemList>
                <ItemList text="Persoangens" icon={faUser} color="#bf4545"></ItemList>
                <ItemList text="Naves" icon={faRocket} color="#045b87"></ItemList>
                <ItemList text="Veículos" icon={faCarSide} color="#9c33ab"></ItemList>
                <ItemList text="Planetas" icon={faGlobe} color="#08780e"></ItemList>
                <ItemList text="Espécies" icon={faDna} color="#916119"></ItemList>
            </ul>
        </nav>
    )
}
