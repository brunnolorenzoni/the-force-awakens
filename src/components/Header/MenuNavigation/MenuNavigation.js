

import React, {useState, useEffect} from 'react';

import MenuNavBar from "./MenuNavBar/MenuNavBar";
import MenuButtonHamburguer from "./MenuButtonHamburguer/MenuButtonHamburguer";

import { disableScroll, enableScroll } from "../../../utils/controlScroll";


export default function MenuNavigation() {

    const [showMenu, setShowMenu] = useState(false)

    function handleClick()
    {
        if(window.innerWidth < 768){
            setShowMenu(!showMenu);
        }
        
    }

    useEffect(() => {
        
        if(showMenu) {
            disableScroll();
        } else {
            enableScroll();
        }
        

    }, [showMenu]);

    return (
        <>
            <MenuButtonHamburguer parentListener={handleClick}/>
            <MenuNavBar parentListener={handleClick} show={showMenu}/>
            
        </>
    )
}