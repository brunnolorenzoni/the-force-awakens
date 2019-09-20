import React from 'react';

import ItemList from "./ItemList/ItemList"

import "./NavList.scss";

export default function NavList(props) {

   const { color, data, href, title } = props;

    return (
        <nav className="nav-characters">

            <h4 className="list-title">{title}</h4>

            <ul className="list-characters">

                {
                    data.map((item, index) => (
                        <ItemList key={index} url={item} href={href} color={color}/>
                    ))
                }


            </ul>
        </nav>
        
    )
}