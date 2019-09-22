import React from 'react';

import ItemList from "./ItemList/ItemList"

import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faDna } from '@fortawesome/free-solid-svg-icons'

export default function MenuNavBar(props) {

    const { show, parentListener } = props;

    return (
        <nav id="nav-menu" className={show ? 'show' : ''}>
            <ul className="list-menu">
                <ItemList text="Films" onClick={parentListener} href="/films" icon={faFilm} color="#ffbb00"></ItemList>
                <ItemList text="Characters" icon={faUser} color="#bf4545"></ItemList>
                <ItemList text="Starships" icon={faRocket} color="#045b87"></ItemList>
                <ItemList text="Vehicles" icon={faCarSide} color="#9c33ab"></ItemList>
                <ItemList text="Planets" icon={faGlobe} color="#08780e"></ItemList>
                <ItemList text="Species" icon={faDna} color="#916119"></ItemList>
            </ul>
        </nav>
    )
}
