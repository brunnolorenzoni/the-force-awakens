import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { enableScroll } from "../../../../../utils/controlScroll";

const ItemList = (props) => {

    const {icon, text, href, color, onClick} = props;

    const handleClick = () => {
        onClick();
        if(window.innerWidth < 768){
            enableScroll();
        }
    };

    return (
        <li className="item-menu">
            {href ? 
                
                <Link to={href} onClick={handleClick}>
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

export default ItemList;