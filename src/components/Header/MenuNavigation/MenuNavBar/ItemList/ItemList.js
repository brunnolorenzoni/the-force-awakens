import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./ItemList.scss"

export default function ItemList(props) {

    const {icon, text, href, color} = props;

    return (
        <li className="item-menu">
            {href ? 
                
                <Link to={href}>
                    <FontAwesomeIcon className="icon" icon={icon} size="xs" style={{color: color}}/>
                    <span className="text" style={{color: color}}>{text}</span>
                </Link>
                
                : 
                
                <Link>
                    <FontAwesomeIcon className="icon" icon={icon} size="xs" style={{color: color}}/>
                    <span className="text" style={{color: color}}>{text}</span>
                </Link>
                
            }
        
        </li>
    )
}