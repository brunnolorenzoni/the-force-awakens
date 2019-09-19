import React from 'react';

import TitleHeader from "./TitleHeader/TitleHeader";
import SocialMediaBar from "./SocialMediaBar/SocialMediaBar";
import MenuNavigation from "./MenuNavigation/MenuNavigation";

import './Header.scss'

export default function Header() {

    return (
        <>
            <header id="header-wrapper">
                <TitleHeader />
                <MenuNavigation/>
                <SocialMediaBar/>
            </header>
        
        </>
    )
}