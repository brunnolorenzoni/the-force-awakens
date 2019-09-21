import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { enableScroll } from "../../../../../utils/controlScroll";

import "./ItemList.scss"

export default function ItemList(props) {

    const {icon, text, href, color} = props;

    return (
        <li className="item-menu">
            {href ? 
                
                <Link to={href} onClick={enableScroll}>
                    <FontAwesomeIcon className="icon" icon={icon} size="xs" style={{color: color}}/>
                    <span className="text">{text}</span>
                </Link>
                
                : 
                
                <a>
                    <FontAwesomeIcon className="icon" icon={icon} size="xs" style={{color: color}}/>
                    <span className="text">{text}</span>
                </a>
                
            }
        
        </li>
    )
}
