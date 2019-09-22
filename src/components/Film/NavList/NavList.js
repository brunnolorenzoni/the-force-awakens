import React from 'react';

import ItemList from "./ItemList/ItemList"

export default function NavList(props) {

   const { color, data, href, title } = props;

    return (
        <nav className="nav-list">

            <h4 className="list-title">{title}</h4>

            <ul className="list-nav">

                {
                    data.map((item, index) => (
                        <ItemList key={index} id={item.id} text={item.name} href={href} color={color}/>
                    ))
                }


            </ul>
        </nav>
        
    )
}